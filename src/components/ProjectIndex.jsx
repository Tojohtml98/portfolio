import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

// El hover abre la fila solo donde hay puntero real; en touch manda el tap.
const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

function Row({ project, index, isOpen, onOpen, onToggle }) {
  const { title, kind, blurb, highlights, stack, live, code, liveLabel, cold } = project;
  const panelId = `project-panel-${index}`;
  const num = String(index + 1).padStart(2, "0");

  return (
    <li
      className={`idx-row${isOpen ? " open" : ""}`}
      onMouseEnter={() => canHover() && onOpen()}
    >
      <button
        type="button"
        className="idx-head"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onFocus={onOpen}
      >
        <span className="idx-num">{num}</span>
        <span className="idx-title">{title}</span>
        <span className="idx-kind">{kind}</span>
        <span className="idx-chev" aria-hidden="true" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            className="idx-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="idx-panel-inner">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function ProjectIndex({ projects }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="idx" onMouseLeave={() => canHover() && setOpenIndex(null)}>
      {projects.map((p, i) => (
        <Row
          key={p.title}
          project={p}
          index={i}
          isOpen={openIndex === i}
          onOpen={() => setOpenIndex(i)}
          onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
        />
      ))}
    </ul>
  );
}
