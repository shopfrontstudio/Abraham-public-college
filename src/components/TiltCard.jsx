import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

// Subtle 3D tilt toward the cursor for a signature surface (used sparingly —
// not every card, to keep the effect feeling intentional rather than
// gimmicky). Mouse-only and inert under prefers-reduced-motion.
function TiltCard({ children, className = "", max = 7 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useSpring(mvY, { stiffness: 160, damping: 18 });
  const rotateY = useSpring(mvX, { stiffness: 160, damping: 18 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    mvX.set(px * max);
    mvY.set(py * -max);
  };

  const handlePointerLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
