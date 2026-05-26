# Portfolio — Tomás Orella

> Portfolio personal de Tomás Orella, Junior Full-Stack Developer (foco backend Node.js).
> Agrupa los proyectos en producción, el stack y los datos de contacto en una sola página.

🔗 **Live:** _(se completa al deployar)_

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
├── data/projects.js      # única fuente de verdad: proyectos, skills, perfil
├── components/
│   └── ProjectCard.jsx
├── App.jsx               # secciones: hero · proyectos · skills · contacto
└── index.css            # design system
```
