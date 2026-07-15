import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const aboutPhoto = `${import.meta.env.BASE_URL}gallery/students-08.jpg`;

// Small gold rule that draws itself in (DrawSVG) as the label scrolls into
// view — a quiet signature flourish. Static under prefers-reduced-motion.
export function SectionLabel({ children, className = "" }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const line = ref.current?.querySelector("line");
      if (!line) return;

      gsap.from(line, {
        drawSVG: "0%",
        duration: 0.9,
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <span
      ref={ref}
      className={`inline-flex items-center gap-3 font-body text-xs font-bold uppercase tracking-[0.25em] ${className}`}
    >
      <svg aria-hidden="true" width="32" height="2" viewBox="0 0 32 2" className="overflow-visible">
        <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="2" className="text-gold" />
      </svg>
      {children}
    </span>
  );
}

function About() {
  const { about } = content;
  const sectionRef = useRef(null);

  // The photo drifts a touch slower than the section while scrolling past —
  // scrubbed, GPU-only, desktop-sized screens only.
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!window.matchMedia("(min-width: 1024px)").matches) return;

      gsap.fromTo(
        "[data-about-photo]",
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-emerald text-ivory">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_38%)]" />
      <div className="relative mx-auto grid max-w-[100rem] lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="relative min-h-[30rem] overflow-hidden lg:min-h-[46rem]" y={40}>
          <img
            data-about-photo
            src={aboutPhoto}
            alt="A confident Abraham Public College student standing in his classroom"
            className="absolute inset-0 h-full w-full scale-[1.12] object-cover lg:will-change-transform"
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
            </Reveal>
            <SplitHeading
              as="h2"
              className="mt-6 font-heading text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[0.98] text-white"
            >
              {about.heading}
            </SplitHeading>
            <Reveal delay={0.2}>
              <p className="mt-7 font-body text-base leading-8 text-white/76 sm:text-lg">
                {about.copy}
              </p>
              <blockquote className="mt-9 border-l-2 border-gold pl-6 font-heading text-xl italic leading-relaxed text-gold-soft sm:text-2xl">
                “{about.promise.quote}”
              </blockquote>
            </Reveal>

            <PromisePoints points={about.promise.points} />
          </div>
        </div>
      </div>
    </section>
  );
}

// The four promise values cascade in on a GSAP stagger the first time they
// enter the viewport; instantly visible under prefers-reduced-motion.
function PromisePoints({ points }) {
  const listRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(listRef.current.children, {
        y: 26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        scrollTrigger: { trigger: listRef.current, start: "top 86%", once: true },
      });
    },
    { scope: listRef },
  );

  return (
    <div ref={listRef} className="mt-12 grid grid-cols-2 border-y border-white/14 sm:grid-cols-4">
      {points.map((point) => (
        <div key={point.label} className="border-white/14 px-2 py-6 text-center sm:border-r sm:last:border-r-0">
          <Icon name={point.icon} className="mx-auto h-6 w-6 text-gold" />
          <span className="mt-3 block font-body text-xs font-bold uppercase tracking-[0.12em] text-white">
            {point.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default About;
