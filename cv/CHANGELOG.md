# CHANGELOG — CV Tomás Orella

Diff del CV nuevo (2026-07-24) respecto del **CV anterior servido** (versión 2026-05-26: 5 proyectos, sin TypeScript).
Fuente estable: `cv/cv-en.html` · `cv/cv-es.html` → PDFs con Chrome headless (`--no-pdf-header-footer`).

---

## ➕ Agregado

### Proyectos
- **Code Reviewer Agent** (nuevo, ahora el primero) — CLI sobre Claude Agent SDK. _Verificado: `bin` ejecutable, `src/` (index/git/reviewer), docs, ejemplos, README con uso._
- **Ecommerce API · Polyglot** (nuevo) — Node+Mongo / PostgreSQL / Python+FastAPI. _Verificado: `postgres/CartRepository.js` usa `SELECT … FOR UPDATE` real; `python-service/app/main.py` importa FastAPI (async)._

### Skills
- Backend: **+TypeScript, +Python, +FastAPI, +PostgreSQL, +Claude Agent SDK**
- Testing & Deploy: **+CI (GitHub Actions)**

### Perfil
- Reescrito para reflejar TypeScript, rotación de refresh tokens, PostgreSQL/FastAPI y "todos los proyectos desplegados y accesibles". Sin inventar experiencia (mantiene "primer puesto junior").

### Portfolio
- **Botón "Descargar CV"** en el Hero. _Antes el portfolio NO tenía ningún link al CV — el PDF se servía pero era inaccesible desde la UI._

---

## ✏️ Corregido (para que cada línea sea defendible en entrevista)

| Afirmación anterior | Problema | Ahora |
|---|---|---|
| Scalable: "**Joi** validation on every route" | **Falso**: Joi no es dependencia; valida con schemas de Mongoose | "Faker-based mocking endpoints + bcrypt + integration tests" |
| Scalable: "**deterministic seed**" | **Falso**: no hay seed; hay módulo de mocking con Faker | "Faker-based mocking endpoints to generate test data" |
| Scalable: "**E2E test suite**" | Exagerado (1 archivo, 7 casos) | "integration tests with Jest + Supertest" |
| Ecommerce: tag **Docker** | **Falso**: no tiene Dockerfile (deploya con render.yaml) | tag Docker removido |
| TaskFlow Client: "**cared** empty states" | Inglés no idiomático | "polished empty states" |

---

## ➖ Removido
- **Proyecto MateStore** — el más débil (catálogo mock + Firebase). Sacado para mantener 1 página y subir la calidad promedio. _Sigue en el portfolio._

---

## 🔧 Estructural / formato
- **Fuente reconstruida y versionada** en `cv/` (antes vivía en `/tmp`, se perdía en cada reinicio).
- **PDF sin el header `file:///Users/...` ni fecha** que tenía el PDF viejo (impreso desde HTML local).
- **Renombrado** `Tomás Orella — CV.pdf` → `Tomas-Orella-CV.pdf` (sin espacios/acentos/em-dash: mejor para URL, descarga y parsers ATS).
- Verificado: **1 página** exacta (EN y ES), y el PDF servido tiene hash idéntico al fuente.

---

## ✅ Verificaciones de evidencia (código real, no copy)
- TaskFlow: **30 tests** corren y pasan · **rotación de refresh** confirmada en `auth.service.ts` (chequea token guardado, emite uno nuevo, invalida en logout) · access 15m por env.
- Ecommerce: `SELECT … FOR UPDATE` literal + microservicio FastAPI async reales.
- Scalable: OpenAPI 3.0.0 en `swagger.js` · Faker + bcrypt en deps · Jest+Supertest presentes.
- Code Reviewer Agent: `@anthropic-ai/claude-agent-sdk` en deps, ejecutable `code-review`.
- Todos los deploys (3 fronts + 4 backends) respondieron **200**.
