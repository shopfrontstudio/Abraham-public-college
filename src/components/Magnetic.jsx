import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

// Wraps a button/link so it pulls gently toward the cursor on hover.
// Mouse-only (touch/pen pass through untouched) and inert under
// prefers-reduced-motion.
function Magnetic({ children, strength = 0.3, className = "inline-block" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(mvY, { stiffness: 220, damping: 16, mass: 0.4 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    mvX.set((event.clientX - bounds.left - bounds.width / 2) * strength);
    mvY.set((event.clientY - bounds.top - bounds.height / 2) * strength);
  };

  const handlePointerLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
