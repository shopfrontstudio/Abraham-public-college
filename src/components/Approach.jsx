import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import StaggerText from "./StaggerText";

// A sticky scroll-storytelling layout: a pinned panel on the left tracks
// whichever item on the right is currently in view, so the story reads as
// one continuous thread rather than a static grid. Falls back to a plain
// stacked list on mobile, where sticky panels don't make sense.
function Approach() {
  const { approach } = content;
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeItem = approach.items[activeIndex];

  return (
    <section className="bg-notebook-lines bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="heading-glow mx-auto w-fit text-center font-heading text-3xl font-semibold text-navy md:text-4xl">
            <StaggerText text={approach.heading} />
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center font-body text-ink/70">
            {approach.subheading}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="rounded-3xl border border-gold-light bg-gradient-to-br from-white to-cream-dark/60 p-8 shadow-sm">
              <span className="font-heading text-sm font-semibold uppercase tracking-widest text-maroon">
                {String(activeIndex + 1).padStart(2, "0")} / {String(approach.items.length).padStart(2, "0")}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <span className="mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-cream">
                    <Icon name={activeItem.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-navy">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-ink/75">
                    {activeItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex gap-2">
                {approach.items.map((item, index) => (
                  <span
                    key={item.title}
                    aria-hidden="true"
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? "bg-maroon" : "bg-navy/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {approach.items.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="scroll-mt-32"
              >
                <Reveal delay={index * 0.05}>
                  <SpotlightCard className="group h-full rounded-2xl border border-gold-light bg-gradient-to-b from-white to-cream-dark/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-cream transition-colors duration-300 group-hover:bg-maroon">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink/75">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
