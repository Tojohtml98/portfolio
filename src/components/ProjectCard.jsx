function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const {
    title, kind, featured, blurb, highlights, stack, live, code, liveLabel, cold,
  } = project;
  const isBackend = kind === "Backend";

  return (
    <article className={`card${featured ? " featured" : ""}`}>
      <div className="card-head">
        <h3>{title}</h3>
        <span className={`kind${isBackend ? " backend" : ""}`}>{kind}</span>
      </div>

      <p className="blurb">{blurb}</p>

      {highlights?.length > 0 && (
        <ul className="highlights">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      <div className="tags">
        {stack.map((s) => (
          <span className="tag" key={s}>{s}</span>
        ))}
      </div>

      <div className="card-links">
        {live && (
          <a className="card-link primary" href={live} target="_blank" rel="noreferrer">
            {liveLabel || "Ver live"} <Arrow />
          </a>
        )}
        <a className={`card-link${live ? "" : " primary"}`} href={code} target="_blank" rel="noreferrer">
          Código <Arrow />
        </a>
        {cold && <span className="cold-note">⏳ free tier: 1ª carga ~30s</span>}
      </div>
    </article>
  );
}
