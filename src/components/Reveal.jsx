import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/motion";

// Fades, lifts and softly un-blurs a section into view once as the user
// scrolls to it. Respects prefers-reduced-motion by skipping the transform.
function Reveal({ children, delay = 0, className = "", y = 26 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Container for choreographed grids/lists: children (RevealItem) cascade in
// with a stagger instead of firing all at once.
export function RevealGroup({ children, className = "", stagger = 0.1, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduceMotion ? 0 : stagger } },
      }}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({ children, className = "", as = "div", y = 22 }) {
  const reduceMotion = useReducedMotion();
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      className={className}
      variants={{
        hidden: reduceMotion ? {} : { opacity: 0, y, filter: "blur(4px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: EASE } },
      }}
    >
      {children}
    </Comp>
  );
}

export default Reveal;
