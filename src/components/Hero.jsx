import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { content } from "../content";
import { Icon } from "../lib/icons";
import { EASE } from "../lib/motion";
import { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";
import TiltCard from "./TiltCard";

const chipPositions = [
  "-top-5 -left-6 rotate-[-6deg]",
  "-top-6 right-8 rotate-[4deg]",
  "top-1/4 -left-9 rotate-[3deg]",
  "top-1/3 -right-8 rotate-[-4deg]",
  "bottom-1/3 -left-7 rotate-[-3deg]",
  "bottom-10 -right-6 rotate-[5deg]",
  "-bottom-6 left-10 rotate-[-2deg]",
  "-bottom-5 right-1/4 rotate-[2deg]",
];

const floatAnim = ["animate-float-slow", "animate-float-medium"];

function Hero() {
  const { hero } = content;
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 130]);
  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);
  const chipsY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 40]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -30]);

  // Headline follows a "Sentence. Sentence." shape — the second sentence
  // gets the gold-to-maroon gradient accent for a premium focal point.
  const headlineParts = hero.headline.split(". ").filter(Boolean);
  const [headlineLead, headlineAccent] = headlineParts;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      <motion.div
        aria-hidden="true"
        className="bg-dot-grid absolute inset-0"
        style={{ y: bgY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-maroon/20 blur-3xl"
        style={{ y: blobOneY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-16 right-[-8%] h-80 w-80 rounded-full bg-gold/25 blur-3xl"
        style={{ y: blobTwoY }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.97, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-maroon">
            {content.school.location}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
            {headlineLead ? `${headlineLead}. ` : null}
            {headlineAccent ? (
              <span className="text-gradient-gold">{headlineAccent}</span>
            ) : null}
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/80">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic strength={0.3}>
              <a
                href="#admissions"
                className="inline-block rounded-full bg-maroon px-6 py-3 font-body font-medium text-cream shadow-sm transition-shadow hover:shadow-lg hover:shadow-maroon/20"
              >
                {hero.primaryCta}
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="inline-block rounded-full border border-navy/30 px-6 py-3 font-body font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-cream"
              >
                {hero.secondaryCta}
              </a>
            </Magnetic>
          </div>

          <RevealGroup as="ul" className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.08}>
            {hero.trustBadges.map((badge) => (
              <RevealItem as="li" key={badge} className="flex items-center gap-2 font-body text-sm text-ink/75">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-maroon" aria-hidden="true" />
                {badge}
              </RevealItem>
            ))}
          </RevealGroup>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          style={{ y: photoY }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        >
          <TiltCard className="[transform-style:preserve-3d]">
            <div className="aspect-4/3 w-full rounded-3xl border border-gold-light bg-gradient-to-br from-navy via-navy to-maroon-dark p-1 shadow-xl">
              <div className="flex h-full w-full items-center justify-center rounded-[1.35rem] bg-cream-dark/90 text-ink/40">
                {/* Replace this placeholder with a real photo of the school. */}
                <span className="font-body text-sm uppercase tracking-wide">
                  School Photo
                </span>
              </div>
            </div>
          </TiltCard>

          <motion.div className="pointer-events-none absolute inset-0" style={{ y: chipsY }}>
            {hero.floatingChips.map((chip, index) => (
              <span
                key={`${chip.type}-${chip.value}`}
                className={`absolute hidden items-center gap-1 rounded-full border border-gold-light bg-white px-3 py-1.5 font-body text-xs font-semibold text-navy shadow-md sm:flex ${chipPositions[index % chipPositions.length]} ${floatAnim[index % floatAnim.length]}`}
                style={{ animationDelay: `${(index % 4) * 0.5}s` }}
              >
                {chip.type === "icon" ? (
                  <Icon name={chip.value} className="h-3.5 w-3.5 text-maroon" />
                ) : (
                  chip.value
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
