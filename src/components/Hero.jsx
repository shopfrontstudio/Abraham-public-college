import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { content } from "../content";
import { Icon } from "../lib/icons";

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

  return (
    <section
      id="home"
      className="bg-dot-grid relative overflow-hidden px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-maroon">
            {content.school.location}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-navy md:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/80">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="rounded-full bg-maroon px-6 py-3 font-body font-medium text-cream shadow-sm transition-all hover:-translate-y-0.5 hover:bg-maroon-dark hover:shadow-md"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-navy/30 px-6 py-3 font-body font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-cream"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {hero.trustBadges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 font-body text-sm text-ink/75"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-maroon" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="aspect-4/3 w-full rounded-3xl border border-gold-light bg-gradient-to-br from-navy via-navy to-maroon-dark p-1 shadow-xl">
            <div className="flex h-full w-full items-center justify-center rounded-[1.35rem] bg-cream-dark/90 text-ink/40">
              {/* Replace this placeholder with a real photo of the school. */}
              <span className="font-body text-sm uppercase tracking-wide">
                School Photo
              </span>
            </div>
          </div>

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
      </div>
    </section>
  );
}

export default Hero;
