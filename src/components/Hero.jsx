import { Fragment, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { profile } from "../data/projects";
import tomas from "../assets/tomas.jpg";
import MagneticButton from "./MagneticButton";

const fadeBlur = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const wordStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
};

function H1() {
  const reduceMotion = useReducedMotion();
  const parts = [
    { t: "APIs", cls: "" },
    { t: "sólidas", cls: "i" },
    { t: "en", cls: "" },
    { t: "Node.js", cls: "em" },
  ];
  return (
    <motion.h1
      variants={wordStagger}
      initial={reduceMotion ? "show" : "hidden"}
      animate="show"
      aria-label="APIs sólidas en Node.js"
    >
      {parts.map((p, i) => (
        <Fragment key={i}>
          <motion.span
            className="word"
            variants={fadeBlur}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {p.cls === "i" && <i>{p.t}</i>}
            {p.cls === "em" && <em>{p.t}</em>}
            {p.cls === "" && p.t}
          </motion.span>
          {/* el espacio va FUERA del span: dentro de un inline-block se colapsa */}
          {i < parts.length - 1 && " "}
        </Fragment>
      ))}
    </motion.h1>
  );
}

function HeroPhoto() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
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
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1], delay: 0.08 }}
    >
      <div ref={ref} className="photo-frame" onMouseMove={onMouseMove}>
        <img src={tomas} alt="Tomás Orella" loading="eager" />
        <div className="photo-spot" aria-hidden="true" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <H1 />
          <motion.p
            className="pitch"
            initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1], delay: 0.25 }}
          >
            Soy Tomás, desarrollador full-stack argentino enfocado en backend.
            Construyo aplicaciones bien estructuradas, con auth sólida y arquitectura
            clara. Mi stack principal es Node, Express, MongoDB y React.
          </motion.p>
          <motion.div
            className="actions"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1], delay: 0.4 }}
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
            <MagneticButton
              href="/Tomas-Orella-CV.pdf"
              className="btn btn-ghost"
              download="Tomas-Orella-CV.pdf"
            >
              Descargar CV
            </MagneticButton>
          </motion.div>
        </div>
        <HeroPhoto />
      </div>
    </section>
  );
}
