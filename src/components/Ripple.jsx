import { useCallback, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

let rippleId = 0;

// Wraps a tappable element and spawns a short-lived ripple from the touch
// point on pointerdown — tactile feedback standing in for the hover state
// touch devices don't have. Fires for any pointer type; inert under
// prefers-reduced-motion.
function Ripple({ children, className = "relative inline-block overflow-hidden", color = "rgba(255,255,255,0.5)" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [ripples, setRipples] = useState([]);

  const spawnRipple = useCallback(
    (event) => {
      if (reduceMotion || !ref.current) return;
      const bounds = ref.current.getBoundingClientRect();
      const size = Math.max(bounds.width, bounds.height) * 2;
      const x = event.clientX - bounds.left - size / 2;
      const y = event.clientY - bounds.top - size / 2;
      const id = rippleId++;
      setRipples((prev) => [...prev, { id, x, y, size }]);
    },
    [reduceMotion],
  );

  const removeRipple = (id) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  };

  return (
    <div ref={ref} className={className} onPointerDown={spawnRipple}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          onAnimationEnd={() => removeRipple(ripple.id)}
          className="animate-ripple pointer-events-none absolute rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}

export default Ripple;
