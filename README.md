# Portfolio — Tomás Orella

> Portfolio personal de Tomás Orella, Junior Full-Stack Developer (foco backend Node.js).
> Agrupa los proyectos en producción, el stack y los datos de contacto en una sola página.

🔗 **Live:** https://portfolio-pied-one-4hquhnqev3.vercel.app

## Stack

- **React 19 + Vite** — SPA de una sola página
- **CSS** vanilla con design tokens (paleta warm + acento amber, dot-grid, tipografía Fraunces + Inter)
- **Deploy:** Vercel

## Proyectos destacados

Todos los proyectos del portfolio están desplegados y accesibles:

| Proyecto | Tipo | Live |
|---|---|---|
| TaskFlow API | Backend | https://taskflow-api-mti1.onrender.com |
| Scalable Backend API | Backend | https://scalable-backend-api.onrender.com/api/docs |
| Clean Architecture API | Backend | https://nodejs-clean-architecture-api.onrender.com |
| Ecommerce API | Backend | https://nodejs-ecommerce-api-oqbu.onrender.com |
| TaskFlow Client | Frontend | https://taskflow-client-nu.vercel.app |
| MateStore | Frontend | https://matestore.vercel.app |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción → dist/
npm run preview  # sirve el build localmente
```

## Estructura

```
src/
├── data/projects.js          # única fuente de verdad: proyectos, skills, perfil
├── components/
│   ├── Hero.jsx              # hero animado
│   ├── StatBand.jsx          # franja de números
│   ├── StickyStory.jsx       # scrollytelling
│   ├── ProjectIndex.jsx      # índice editorial de proyectos
│   ├── ProjectCard.jsx
│   └── MagneticButton.jsx
├── hooks/useWarmBackends.js  # despierta las APIs de Render antes del click
├── App.jsx                   # secciones: hero · proyectos · skills · contacto
└── index.css                 # design system
```

## Detalle: cold start de los backends

Las cuatro APIs corren en el free tier de Render, que apaga la instancia tras 15 minutos sin
tráfico; el primer request después tarda cerca de un minuto. En vez de dejar que el visitante
se coma esa espera, `useWarmBackends` dispara un request a cada backend cuando la sección de
proyectos entra en viewport: para cuando termina de leer y hace click, la instancia ya está
levantada.

No hay un cron manteniéndolas siempre despiertas a propósito: Render otorga **750 horas de
free tier por workspace y por mes, compartidas entre todos los servicios**. Tres APIs
encendidas 24/7 son 2160 h/mes y Render suspendería todas a mitad de mes. Despertarlas
únicamente cuando hay una visita real gasta cuota exactamente cuando aporta algo.
