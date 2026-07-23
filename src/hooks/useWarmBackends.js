import { useEffect, useRef } from "react";

// Las APIs backend viven en el free tier de Render: se apagan tras 15 min sin tráfico y
// el primer request tarda ~1 min en levantarlas. Un visitante que hace click en "Live"
// se come esa espera mirando una pantalla en blanco.
//
// Esto las despierta ANTES: cuando la sección de proyectos entra en viewport, dispara un
// request a cada backend en background. Para cuando alguien termina de leer y hace click,
// la instancia ya está caliente.
//
// Por qué no un cron que las mantenga siempre despiertas: Render da 750 horas de free tier
// por workspace por mes, compartidas entre TODOS los servicios. Tres APIs siempre encendidas
// son 3 x 720 = 2160 h => Render suspende todo a mitad de mes. Despertarlas sólo cuando hay
// una visita real gasta cuota exactamente cuando sirve.

const SESSION_KEY = "backends-warmed";

export function useWarmBackends(urls) {
  const targetRef = useRef(null);

  useEffect(() => {
    const node = targetRef.current;
    if (!node || !urls.length) return;
    if (typeof IntersectionObserver === "undefined") return;

    let done = false;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // sessionStorage bloqueado (modo privado / cookies off): warmeamos igual, sin memoria
    }

    const warm = () => {
      if (done) return;
      done = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // no pasa nada: sin persistencia sólo se repite el warm en la próxima carga
      }
      for (const url of urls) {
        // no-cors: sólo importa que el request llegue y encienda la instancia, no leer la respuesta
        fetch(url, { mode: "no-cors", cache: "no-store" }).catch(() => {});
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          warm();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [urls]);

  return targetRef;
}
