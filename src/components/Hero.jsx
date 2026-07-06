import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { content } from "../content";
import { Icon } from "../lib/icons";
import { EASE } from "../lib/motion";
import { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";
import TiltCard from "./TiltCard";
import StaggerText from "./StaggerText";
import Ripple from "./Ripple";
import Crest from "./Crest";
import CrestWatermark from "./CrestWatermark";

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
  // gets the sun-to-coral gradient accent for a premium focal point.
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

      {/* Quiet institutional mark — static, very low opacity. */}
      <CrestWatermark className="absolute -right-16 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-navy opacity-[0.05] md:block" />

      {/* Flat geometric shapes — a big marigold sun, a navy ring and a sky
          disc. Bold and graphic rather than blurred, with gentle scroll
          parallax for depth. */}
      <motion.div aria-hidden="true" className="absolute -top-28 right-[-8%]" style={{ y: blobOneY }}>
        <div className="animate-float-slow h-64 w-64 rounded-full bg-sun/90 md:h-80 md:w-80" />
      </motion.div>
      <motion.div aria-hidden="true" className="absolute -bottom-24 left-[-6%]" style={{ y: blobTwoY }}>
        <div className="animate-float-medium h-56 w-56 rounded-full bg-sky-deep/60" />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-24 hidden h-16 w-16 rounded-full border-[6px] border-navy/15 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-24 right-[16%] hidden h-8 w-8 rotate-12 rounded-md bg-coral/70 lg:block"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.97, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-coral">
            {content.school.location}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl lg:text-6xl">
            {headlineLead ? <StaggerText text={`${headlineLead}.`} /> : null}
            {headlineAccent ? (
              <>
                {" "}
                <StaggerText
                  text={headlineAccent}
                  wordClassName="hl-sun"
                  startDelay={headlineLead ? headlineLead.split(" ").length * 0.06 : 0}
                />
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/80">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic strength={0.3}>
              <Ripple color="rgba(20,33,61,0.2)" className="btn-shine relative inline-block overflow-hidden rounded-2xl">
                <a
                  href="#admissions"
                  className="inline-block rounded-2xl border-2 border-navy bg-sun px-6 py-3 font-body font-bold text-navy shadow-sticker-sm transition-all hover:-translate-y-0.5 hover:shadow-sticker"
                >
                  {hero.primaryCta}
                </a>
              </Ripple>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Ripple color="rgba(20,33,61,0.15)" className="relative inline-block overflow-hidden rounded-2xl">
                <a
                  href="#contact"
                  className="inline-block rounded-2xl border-2 border-navy px-6 py-3 font-body font-bold text-navy transition-colors hover:bg-navy hover:text-paper"
                >
                  {hero.secondaryCta}
                </a>
              </Ripple>
            </Magnetic>
          </div>

          <RevealGroup as="ul" className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.08}>
            {hero.trustBadges.map((badge) => (
              <RevealItem as="li" key={badge} className="flex items-center gap-2 font-body text-sm text-ink/75">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
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
            <div className="aspect-4/3 w-full rounded-3xl border-2 border-navy bg-navy p-1.5 shadow-sticker">
              {/* Replace this placeholder (crest + caption) with a real photo
                  of the school: <img src="..." alt="Abraham Public College" /> */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[1.25rem] bg-sky">
                <Crest className="h-44 w-44 drop-shadow-md md:h-52 md:w-52" />
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-navy/50">
                  Estd. 2004 · Lucknow
                </span>
              </div>
            </div>
          </TiltCard>

          <motion.div className="pointer-events-none absolute inset-0" style={{ y: chipsY }}>
            {hero.floatingChips.map((chip, index) => (
              <span
                key={`${chip.type}-${chip.value}`}
                className={`absolute hidden items-center gap-1 rounded-full border-2 border-navy bg-paper px-3 py-1.5 font-body text-xs font-bold text-navy shadow-sticker-sm sm:flex ${chipPositions[index % chipPositions.length]} ${floatAnim[index % floatAnim.length]}`}
                style={{ animationDelay: `${(index % 4) * 0.5}s` }}
              >
                {chip.type === "icon" ? (
                  <Icon name={chip.value} className="h-3.5 w-3.5 text-coral" />
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
