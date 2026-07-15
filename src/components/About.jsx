import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const aboutPhoto = `${import.meta.env.BASE_URL}gallery/students-08.jpg`;

export function SectionLabel({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 font-body text-xs font-bold uppercase tracking-[0.25em] ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-gold" />
      {children}
    </span>
  );
}

function About() {
  const { about } = content;

  return (
    <section id="about" className="relative overflow-hidden bg-emerald text-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_38%)]" />
      <div className="relative mx-auto grid max-w-[100rem] lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="relative min-h-[30rem] overflow-hidden lg:min-h-[46rem]" y={40}>
          <img
            src={aboutPhoto}
            alt="A confident Abraham Public College student standing in his classroom"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/75 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-emerald/35" aria-hidden="true" />
          <p className="absolute bottom-7 left-6 max-w-xs font-heading text-2xl italic text-white sm:left-10 sm:text-3xl">
            Every child deserves to feel seen.
          </p>
        </Reveal>

        <div className="flex items-center px-6 py-16 sm:px-10 md:py-24 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel className="text-gold-soft">{about.label}</SectionLabel>
              <h2 className="mt-6 font-heading text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[0.98] text-white">
                {about.heading}
              </h2>
              <p className="mt-7 font-body text-base leading-8 text-white/76 sm:text-lg">
                {about.copy}
              </p>
              <blockquote className="mt-9 border-l-2 border-gold pl-6 font-heading text-xl italic leading-relaxed text-gold-soft sm:text-2xl">
                “{about.promise.quote}”
              </blockquote>
            </Reveal>

            <RevealGroup className="mt-12 grid grid-cols-2 border-y border-white/14 sm:grid-cols-4" stagger={0.08}>
              {about.promise.points.map((point) => (
                <RevealItem key={point.label} className="border-white/14 px-2 py-6 text-center sm:border-r sm:last:border-r-0">
                  <Icon name={point.icon} className="mx-auto h-6 w-6 text-gold" />
                  <span className="mt-3 block font-body text-xs font-bold uppercase tracking-[0.12em] text-white">
                    {point.label}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
