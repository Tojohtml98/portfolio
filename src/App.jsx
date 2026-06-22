import { projects, skills, profile } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import StickyStory from "./components/StickyStory";

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">Tomás Orella</a>
          <nav className="nav-links">
            <a href="#projects">Proyectos</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contacto</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />

        <StickyStory />

        {/* projects */}
        <section id="projects">
          <div className="wrap">
            <p className="eyebrow">Trabajo</p>
            <h2 className="section-title">Proyectos en producción</h2>
            <p className="section-lead">
              Seis proyectos reales, todos desplegados y accesibles. El foco está en el
              backend: cómo está construido cada pieza importa más que cuántos endpoints tiene.
            </p>
            <div className="grid">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* skills */}
        <section id="skills">
          <div className="wrap">
            <p className="eyebrow">Herramientas</p>
            <h2 className="section-title">Stack & skills</h2>
            <p className="section-lead">
              Lo que uso a diario para llevar una idea desde el modelo de datos hasta un
              deploy con tests corriendo.
            </p>
            <div className="skills-grid">
              {skills.map((col) => (
                <div className="skill-col" key={col.group}>
                  <h3>{col.group}</h3>
                  <ul>
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="contact">
          <div className="wrap">
            <p className="eyebrow">Hablemos</p>
            <h2 className="section-title">¿Buscás un junior que se toma el <em>craft</em> en serio?</h2>
            <p className="section-lead">
              Estoy buscando mi primer rol remoto o híbrido como backend / full-stack
              developer. Si tenés algo, escribime.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Tomás Orella</span>
          <span>Hecho con React + Vite · Argentina</span>
        </div>
      </footer>
    </>
  );
}
