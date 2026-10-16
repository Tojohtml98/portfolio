// Single source of truth for the portfolio project cards.
// `featured` ones render larger — backend work first, since that's the focus.

export const projects = [
  {
    title: "Code Reviewer Agent",
    kind: "AI · CLI",
    featured: true,
    blurb:
      "CLI que revisa tus cambios de git como un senior — bugs, seguridad y claridad — construida sobre el Claude Agent SDK, el mismo motor que usa Claude Code.",
    highlights: [
      "El agente explora el repo con tools de solo lectura (Read/Grep/Glob) para entender el contexto",
      "Permisos controlados con canUseTool: aprueba solo lectura y deniega el resto",
      "Streaming de la review en vivo a la terminal",
    ],
    stack: ["Node.js", "Claude Agent SDK", "ESM", "CLI"],
    code: "https://github.com/Tojohtml98/code-reviewer-agent",
  },
  {
    title: "TaskFlow API",
    kind: "Backend · TypeScript",
    featured: true,
    blurb:
      "REST API de gestión de tareas migrada entera a TypeScript: autenticación JWT con rotación de refresh tokens, arquitectura en capas estricta y 46 tests de integración (97% de cobertura).",
    highlights: [
      "Migrada de JavaScript a TypeScript con tipado estricto (dominio, req.user, servicios); los tests siguen en verde (hoy son 46, en CI)",
      "Auth stateless: access 15m + refresh con rotación e invalidación al logout",
      "Pipeline Route → Controller → Service → Repository → Model",
    ],
    stack: ["TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Jest", "Docker"],
    live: "https://taskflow-api-mti1.onrender.com",
    code: "https://github.com/Tojohtml98/taskflow-api",
    cold: true,
  },
  {
    title: "Scalable Backend API",
    kind: "Backend",
    featured: true,
    blurb:
      "API de usuarios, mascotas y adopciones enfocada en las prácticas que importan más allá de un tutorial: validación, docs OpenAPI y tests E2E.",
    highlights: [
      "Validación con Joi en el borde de cada ruta",
      "Documentación OpenAPI 3 servida con Swagger UI",
      "Seed determinístico + suite Jest + Supertest",
    ],
    stack: ["Node.js", "Express", "Joi", "Swagger", "Jest", "Docker"],
    live: "https://scalable-backend-api.onrender.com/api/docs",
    code: "https://github.com/Tojohtml98/Scalable-Backend-API",
    liveLabel: "Swagger Docs",
    cold: true,
  },
  {
    title: "Clean Architecture API",
    kind: "Backend",
    featured: false,
    blurb:
      "API Node.js estructurada según la Dependency Rule: entidades, casos de uso y adaptadores desacoplados del framework y la base de datos.",
    highlights: [
      "Capas independientes del framework",
      "Lógica de negocio aislada de Express y Mongo",
    ],
    stack: ["Node.js", "Express", "Clean Architecture", "MongoDB"],
    live: "https://nodejs-clean-architecture-api.onrender.com",
    code: "https://github.com/Tojohtml98/Nodejs-Clean-Architecture-API",
    cold: true,
  },
  {
    title: "Ecommerce API · Políglota",
    kind: "Backend · Microservicios",
    featured: true,
    blurb:
      "El mismo dominio de ecommerce resuelto en tres tecnologías: API Node + MongoDB, una capa relacional en PostgreSQL y un microservicio de analytics en Python (FastAPI) — todos sobre el mismo negocio.",
    highlights: [
      "Capa PostgreSQL: schema relacional, JOINs, transacciones y SELECT … FOR UPDATE para descontar stock sin race conditions",
      "Microservicio Python (FastAPI + Pydantic, async) de lectura y métricas sobre la misma base: microservicios políglotas",
      "API original Node + Express + MongoDB con productos y carritos",
    ],
    stack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Python", "FastAPI", "Docker"],
    live: "https://nodejs-ecommerce-api-oqbu.onrender.com",
    code: "https://github.com/Tojohtml98/Nodejs-Ecommerce-API",
    cold: true,
  },
  {
    title: "TaskFlow Client",
    kind: "Frontend",
    featured: false,
    blurb:
      "Cliente React + Vite que consume la TaskFlow API: login, gestión de tareas y estados, desplegado en Vercel.",
    highlights: [
      "Consume la TaskFlow API con auth por tokens",
      "UI con dot-grid y empty states cuidados",
    ],
    stack: ["React", "Vite", "JavaScript"],
    live: "https://taskflow-client-nu.vercel.app",
    code: "https://github.com/Tojohtml98/taskflow-client",
    cold: false,
  },
  {
    title: "MateStore",
    kind: "Frontend",
    featured: false,
    blurb:
      "Ecommerce de mates y termos hecho con React + Firebase: catálogo, carrito y checkout sobre un catálogo mock.",
    highlights: [
      "Catálogo y carrito con estado en React",
      "Backend con Firebase",
    ],
    stack: ["React", "Firebase", "Vite"],
    live: "https://matestore.vercel.app",
    code: "https://github.com/Tojohtml98/React-Firebase-Ecommerce",
    cold: false,
  },
  {
    title: "Expense Tracker",
    kind: "Full-Stack",
    featured: false,
    blurb:
      "Tracker de gastos personal con CRUD completo y resumen por mes y categoría — pensado para uso real en el día a día, no de tutorial.",
    highlights: [
      "Backend Node/Express 5 + Mongoose 9 con agregación de Mongo para el resumen mensual, tests Jest + Supertest",
      "Frontend React + Vite sin librerías externas, hook custom useExpenses, tests Vitest + Testing Library",
      "Dockerizado por servicio (api + client + mongo), responsive verificado en iPhone",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "React", "Vite", "Jest", "Docker"],
    live: "https://expense-tracker-fawn-ten-40.vercel.app",
    code: "https://github.com/Tojohtml98/expense-tracker",
    cold: true,
  },
  {
    title: "Emily Layus — Inmobiliaria",
    kind: "Freelance · Frontend",
    featured: false,
    blurb:
      "Sitio para una clienta real: migración completa de 15 propiedades y 65 fotos a base y hosting propios, sin downtime para el negocio.",
    highlights: [
      "Migración de datos e imágenes vía API REST desde el sitio viejo a un proyecto Supabase nuevo",
      "Panel admin para que la clienta cargue propiedades sin tocar código",
    ],
    stack: ["JavaScript", "Supabase", "Netlify"],
    live: "https://emilylayus-inmobiliaria.netlify.app",
    cold: false,
  },
  {
    title: "Agenda de Contenido",
    kind: "Frontend · PWA",
    featured: false,
    blurb:
      "Planificador de posts para LinkedIn e Instagram, instalable como PWA — resuelve un problema propio: contenido escrito que nunca se publicaba.",
    highlights: [
      "Estados de post (idea → borrador → listo → publicado), agrupados por fecha con aviso de atraso",
      "TypeScript de punta a punta, persistencia local, exporta/importa JSON",
    ],
    stack: ["React", "TypeScript", "Vite", "PWA"],
    live: "https://content-planner-flax.vercel.app",
    cold: false,
  },
];

export const skills = [
  {
    group: "Backend",
    items: ["Node.js", "Express", "TypeScript", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Mongoose", "JWT", "REST APIs", "Clean Architecture", "Claude Agent SDK"],
  },
  {
    group: "Frontend",
    items: ["React", "Vite", "JavaScript", "HTML", "CSS", "Firebase"],
  },
  {
    group: "Testing & Deploy",
    items: ["Jest", "Supertest", "Swagger / OpenAPI", "Docker", "Vercel", "Render", "MongoDB Atlas", "Git / GitHub", "CI básico"],
  },
];

export const profile = {
  name: "Tomás Orella",
  role: "Junior Full-Stack Developer",
  focus: "foco backend · Node.js",
  location: "Argentina · remoto / híbrido",
  github: "https://github.com/Tojohtml98",
  linkedin: "https://linkedin.com/in/tomasorella",
  email: "tojoorella@gmail.com",
};
