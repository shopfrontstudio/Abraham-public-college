import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/motion";

// Reveals text word-by-word on a short stagger. Reserved for short,
// high-impact headlines — not paragraph copy. Falls back to plain text
// under prefers-reduced-motion.
function StaggerText({ text, className = "", wordClassName = "", stagger = 0.06, startDelay = 0 }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: startDelay } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={`inline-block ${wordClassName}`}
          variants={{
            hidden: { opacity: 0, y: "0.4em", filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: "0em",
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: EASE },
            },
          }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default StaggerText;
