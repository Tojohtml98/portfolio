// Single source of truth for the portfolio project cards.
// `featured` ones render larger — backend work first, since that's the focus.

export const projects = [
  {
    title: "TaskFlow API",
    kind: "Backend",
    featured: true,
    blurb:
      "REST API de gestión de tareas con autenticación JWT y rotación de refresh tokens, arquitectura en capas estricta y 30 tests de integración.",
    highlights: [
      "Auth stateless: access 15m + refresh con rotación e invalidación al logout",
      "Pipeline Route → Controller → Service → Repository → Model",
      "30 tests de integración con Mongo en memoria",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Jest", "Docker"],
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
    title: "Ecommerce API",
    kind: "Backend",
    featured: false,
    blurb:
      "API de ecommerce con catálogo de productos, carrito y órdenes sobre Node.js, Express y MongoDB.",
    highlights: [
      "CRUD de productos, carrito y órdenes",
      "Modelado de datos en MongoDB con Mongoose",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Mongoose"],
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
];

export const skills = [
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST APIs", "Clean Architecture"],
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
