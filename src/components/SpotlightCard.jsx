import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

// A card whose inner glow follows the cursor, giving the impression it's
// lit from the pointer position. Mouse-only tracking; touch/keyboard users
// still see a centered resting glow on hover/focus rather than nothing.
function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse" || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    ref.current.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={handlePointerMove} className={`spotlight-card relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="spotlight-card__glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export default SpotlightCard;
