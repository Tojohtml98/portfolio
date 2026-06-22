import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const STRENGTH = 0.35;
const RADIUS = 90;

export default function MagneticButton({ href, className, external, children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < RADIUS) {
      x.set(dx * STRENGTH);
      y.set(dy * STRENGTH);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </motion.a>
  );
}
