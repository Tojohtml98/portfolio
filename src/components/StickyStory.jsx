import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const beats = [
  {
    k: "Auth",
    t: "Auth con JWT y rotación de refresh tokens.",
  },
  {
    k: "Arquitectura",
    t: "Capas que no se pisan: Route → Controller → Service → Repository.",
  },
  {
    k: "Tests",
    t: "Suites de integración con Jest y MongoDB en memoria.",
  },
  {
    k: "Deploy",
    t: "Desplegado en producción, listo para abrir en un click.",
  },
];

function Beat({ progress, index, total, beat }) {
  const span = 1 / total;
  const start = index * span;
  const end = start + span;
  const opacity = useTransform(
    progress,
    [start, start + span * 0.25, end - span * 0.25, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [40, -40]);
  const blur = useTransform(
    progress,
    [start, start + span * 0.25, end - span * 0.25, end],
    ["14px", "0px", "0px", "14px"]
  );
  return (
    <motion.div
      className="story-beat"
      style={{ opacity, y, filter: blur }}
    >
      <p className="eyebrow">{beat.k}</p>
      <p className="story-text">{beat.t}</p>
    </motion.div>
  );
}

export default function StickyStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const barScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="story" aria-label="El craft detrás de cada proyecto">
      <div className="story-sticky">
        <div className="wrap story-grid">
          <div className="story-head">
            <p className="eyebrow">El craft</p>
            <h2 className="story-title">
              Lo que <em>importa</em> debajo del código.
            </h2>
            <div className="story-bar">
              <motion.div className="story-bar-fill" style={{ scaleX: barScaleX }} />
            </div>
          </div>
          <div className="story-stage">
            {beats.map((b, i) => (
              <Beat
                key={b.k}
                progress={scrollYProgress}
                index={i}
                total={beats.length}
                beat={b}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
