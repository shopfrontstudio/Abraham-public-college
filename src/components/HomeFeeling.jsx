import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import SectionDivider from "./SectionDivider";

function HomeFeeling() {
  const { homeFeeling } = content;
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobOneY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -60, reduceMotion ? 0 : 60]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 50, reduceMotion ? 0 : -50]);

  return (
    <>
      <SectionDivider color="#102A43" />
      <section
        ref={sectionRef}
        className="bg-dot-grid relative overflow-hidden bg-navy py-20 text-cream md:py-28"
      >
        <motion.div aria-hidden="true" className="absolute -left-16 top-0" style={{ y: blobOneY }}>
          <div className="animate-float-slow h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        </motion.div>
        <motion.div aria-hidden="true" className="absolute -right-20 bottom-0" style={{ y: blobTwoY }}>
          <div className="animate-float-medium h-80 w-80 rounded-full bg-maroon/25 blur-3xl" />
        </motion.div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              {homeFeeling.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/85">
              {homeFeeling.copy}
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
            {homeFeeling.points.map((point) => (
              <RevealItem key={point.label}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-cream/5 p-6 transition-colors duration-300 hover:border-gold/60 hover:bg-cream/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-body text-sm font-medium text-cream/90">
                    {point.label}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <SectionDivider color="#fff8ec" flip />
    </>
  );
}

export default HomeFeeling;
