import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

const MAX_TILT = 6;

export default function ProjectCard({ project }) {
  const {
    title, kind, featured, blurb, highlights, stack, live, code, liveLabel, cold,
  } = project;
  const isBackend = kind === "Backend";

  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), {
    stiffness: 220, damping: 22,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), {
    stiffness: 220, damping: 22,
  });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px - 0.5);
    my.set(py - 0.5);
    ref.current.style.setProperty("--card-mx", `${px * 100}%`);
    ref.current.style.setProperty("--card-my", `${py * 100}%`);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.article
      ref={ref}
      className={`card${featured ? " featured" : ""}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="card-shine" aria-hidden="true" />
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
    </motion.article>
  );
}
