import { motion } from "motion/react";

// Números verificables contra data/projects.js — si cambia el portfolio, cambian acá.
const stats = [
  { value: "7", label: "proyectos con código público" },
  { value: "6", label: "desplegados y accesibles" },
  { value: "30", label: "tests de integración en verde" },
  { value: "3", label: "tecnologías sobre un mismo dominio" },
];

export default function StatBand() {
  return (
    <section className="stat-band" aria-label="El portfolio en números">
      <div className="wrap">
        <dl className="stats">
          {stats.map((s, i) => (
            <motion.div
              className="stat"
              key={s.label}
              initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: i * 0.09 }}
            >
              <dt className="stat-value">{s.value}</dt>
              <dd className="stat-label">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
