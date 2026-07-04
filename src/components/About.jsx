import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import TiltCard from "./TiltCard";

function About() {
  const { about } = content;
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const shapeOneY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -40]);
  const shapeTwoY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -30, reduceMotion ? 0 : 50]);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Parallax decorative shapes — purely atmospheric, drift at scroll-tied rates. */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[6%] top-16 hidden h-16 w-16 rounded-full border-2 border-dashed border-gold/40 sm:block"
        style={{ y: shapeOneY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] bottom-24 hidden h-10 w-10 rotate-12 border-2 border-maroon/25 sm:block"
        style={{ y: shapeTwoY }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink/80">
              {about.copy}
            </p>

            <RevealGroup as="ul" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
              {about.highlights.map((item) => (
                <RevealItem
                  as="li"
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-gold-light bg-cream px-4 py-3 font-body text-ink/80"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  {item.label}
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltCard className="rounded-3xl border border-gold-light bg-gradient-to-br from-cream-dark to-cream p-8 shadow-sm [transform-style:preserve-3d]">
              <blockquote className="border-l-4 border-gold pl-5 font-heading text-xl italic leading-snug text-navy">
                “{about.quote}”
              </blockquote>

              <h3 className="mt-8 font-heading text-lg font-semibold text-navy">
                {about.valuesCard.heading}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {about.valuesCard.points.map((point) => (
                  <div
                    key={point.label}
                    className="flex flex-col items-start gap-2 rounded-xl bg-white/70 p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                      <Icon name={point.icon} className="h-4 w-4" />
                    </span>
                    <span className="font-body text-sm font-medium text-ink/80">
                      {point.label}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
