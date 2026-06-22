import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "../data/projects";
import tomas from "../assets/tomas.jpg";
import MagneticButton from "./MagneticButton";

const fadeBlur = {
  hidden: { opacity: 0, y: 18, filter: "blur(14px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const wordStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function H1() {
  const parts = [
    { t: "APIs", cls: "" },
    { t: "sólidas", cls: "i" },
    { t: "en", cls: "" },
    { t: "Node.js", cls: "em" },
  ];
  return (
    <motion.h1 variants={wordStagger} initial="hidden" animate="show" aria-label="APIs sólidas en Node.js">
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className="word"
          variants={fadeBlur}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {p.cls === "i" && <i>{p.t}</i>}
          {p.cls === "em" && <em>{p.t}</em>}
          {p.cls === "" && p.t}
          {i < parts.length - 1 && " "}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function HeroPhoto() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  function onMouseMove(e) {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const yy = ((e.clientY - r.top) / r.height) * 100;
    ref.current.style.setProperty("--mx", `${x}%`);
    ref.current.style.setProperty("--my", `${yy}%`);
  }

  return (
    <motion.div
      className="hero-photo"
      style={{ y }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
    >
      <div ref={ref} className="photo-frame" onMouseMove={onMouseMove}>
        <img src={tomas} alt="Tomás Orella" loading="eager" />
        <div className="photo-spot" aria-hidden="true" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <H1 />
          <motion.p
            className="pitch"
            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.7 }}
          >
            Soy Tomás, desarrollador full-stack argentino enfocado en backend.
            Construyo aplicaciones bien estructuradas, con auth sólida y arquitectura
            clara. Mi stack principal es Node, Express, MongoDB y React.
          </motion.p>
          <motion.div
            className="actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: 0.95 }}
          >
            <MagneticButton href="#projects" className="btn btn-primary">
              Ver proyectos
            </MagneticButton>
            <MagneticButton href={profile.github} className="btn btn-ghost" external>
              GitHub
            </MagneticButton>
            <MagneticButton href={profile.linkedin} className="btn btn-ghost" external>
              LinkedIn
            </MagneticButton>
          </motion.div>
        </div>
        <HeroPhoto />
      </div>
    </section>
  );
}
