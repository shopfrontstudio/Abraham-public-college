import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, PhoneCall, ArrowRight, Send, Pencil, Star, Sparkles } from "lucide-react";
import { content } from "../content";
import { Icon } from "../lib/icons";
import { EASE } from "../lib/motion";
import Magnetic from "./Magnetic";
import TiltCard from "./TiltCard";
import Ripple from "./Ripple";
import Crest from "./Crest";

// Playful hand-drawn feeling doodles scattered around the hero, matching the
// reference mockup: paper plane, 123, ABC letters, pencil, stars. All
// decorative (aria-hidden), gently floating, hidden on small screens.
function Doodles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      <Send className="animate-float-slow absolute left-[4%] top-16 h-9 w-9 -rotate-12 text-gold" strokeWidth={1.5} />
      <svg className="absolute left-[7%] top-24 h-16 w-24 text-gold/60" viewBox="0 0 100 60" fill="none">
        <path d="M8 8 C30 40 60 50 92 30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" />
      </svg>
      <span className="animate-float-medium absolute left-[38%] top-10 font-heading text-3xl font-semibold italic text-green-accent/80">
        123
      </span>
      <span className="animate-float-slow absolute bottom-24 left-[3%] select-none font-heading text-4xl font-bold">
        <span className="text-pink-accent">A</span>
        <span className="text-blue-accent">B</span>
        <span className="text-gold">C</span>
      </span>
      <Pencil className="animate-float-medium absolute bottom-40 left-[30%] h-8 w-8 rotate-45 text-gold" strokeWidth={1.5} />
      <Star className="animate-float-slow absolute left-[34%] top-1/2 h-5 w-5 text-gold/70" strokeWidth={1.5} />
      <Sparkles className="animate-float-medium absolute right-[6%] bottom-16 h-6 w-6 text-gold/60" strokeWidth={1.5} />
      <Star className="animate-float-medium absolute left-[46%] top-[30%] h-4 w-4 rotate-12 text-maroon/40" strokeWidth={1.5} />
    </div>
  );
}

function Hero() {
  const { hero } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-cream px-6 pb-28 pt-16 md:pb-32 md:pt-20">
      {/* Soft warm vignettes, like the mockup's gentle corner tints. */}
      <div aria-hidden="true" className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gold-soft/50 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-yellow-soft/80 blur-3xl" />

      <Doodles />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-yellow-soft px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-maroon">
            <GraduationCap className="h-4 w-4 text-gold" aria-hidden="true" />
            {hero.welcomePill}
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-[3.4rem]">
            {hero.headlineLead}
            <br />
            <span className="text-maroon">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-md font-body leading-relaxed text-muted">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic strength={0.3}>
              <Ripple className="btn-shine relative inline-block overflow-hidden rounded-lg">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 rounded-lg bg-maroon px-6 py-3 font-body font-bold text-white shadow-md shadow-maroon/25 transition-all hover:-translate-y-0.5 hover:bg-maroon-dark"
                >
                  {hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Ripple>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Ripple color="rgba(16,42,67,0.15)" className="relative inline-block overflow-hidden rounded-lg">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-navy/25 bg-white px-6 py-3 font-body font-bold text-navy transition-all hover:-translate-y-0.5 hover:border-navy"
                >
                  {hero.secondaryCta}
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                </a>
              </Ripple>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        >
          {/* Graduation-cap badge overlapping the photo's top-right corner. */}
          <span className="absolute -right-3 -top-5 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy shadow-lg ring-4 ring-cream">
            <GraduationCap className="h-7 w-7 text-white" aria-hidden="true" />
          </span>

          <TiltCard max={4} className="animate-float-slow [transform-style:preserve-3d]">
            <div className="rotate-2 rounded-2xl bg-white p-2.5 shadow-xl shadow-navy/15 transition-transform duration-500 hover:rotate-1">
              {/* Replace this placeholder with a real photo of the school:
                  <img src="..." alt="Abraham Public College building" className="aspect-[4/3] w-full rounded-xl object-cover" /> */}
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-blue-card via-cream to-yellow-soft">
                <Crest className="h-36 w-36 drop-shadow md:h-44 md:w-44" />
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-navy/50">
                  School Photo · Estd. 2004
                </span>
              </div>
            </div>
          </TiltCard>

          {/* Floating trust card overlapping the photo's bottom edge. */}
          <motion.div
            className="relative z-10 -mt-8 md:-ml-10 md:mr-6"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
          >
            <ul className="grid grid-cols-2 divide-navy/10 rounded-2xl bg-white p-4 shadow-xl shadow-navy/10 sm:grid-cols-4 sm:divide-x">
              {hero.trustBadges.map((badge) => (
                <li key={badge.label} className="flex flex-col items-center gap-2 px-2 py-3 text-center">
                  <Icon name={badge.icon} className="h-6 w-6 text-maroon" />
                  <span className="font-body text-xs font-semibold leading-snug text-navy">
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
