import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

// Small gold label with a leading dash, as used across the mockup.
export function SectionLabel({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.25em] text-maroon ${className}`}>
      <span aria-hidden="true" className="h-0.5 w-6 rounded bg-gold" />
      {children}
    </span>
  );
}

function About() {
  const { about } = content;

  return (
    <section id="about" className="relative overflow-hidden bg-blue-soft py-20 md:py-24">
      {/* Dotted decorative patterns, echoing the mockup. */}
      <div aria-hidden="true" className="bg-dot-grid absolute left-6 top-10 h-28 w-40 opacity-40" />
      <div aria-hidden="true" className="bg-dot-grid absolute bottom-10 right-8 h-28 w-40 opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <SectionLabel>{about.label}</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy md:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-6 max-w-lg font-body leading-relaxed text-muted">
            {about.copy}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <TiltCard max={4} className="[transform-style:preserve-3d]">
            <div className="rounded-3xl bg-navy-deep p-8 shadow-2xl shadow-navy/30 md:p-10">
              <p className="font-heading text-lg font-bold text-gold">{about.promise.title}</p>
              <p className="mt-3 font-body leading-relaxed text-white/90">
                {about.promise.quote}
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {about.promise.points.map((point) => (
                  <li key={point.label} className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <Icon name={point.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-body text-sm font-semibold text-white">
                      {point.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
