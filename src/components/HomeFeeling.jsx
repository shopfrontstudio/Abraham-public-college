import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";

function HomeFeeling() {
  const { homeFeeling } = content;

  return (
    <>
      <SectionDivider color="#102A43" />
      <section className="bg-dot-grid relative bg-navy py-20 text-cream md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              {homeFeeling.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/85">
              {homeFeeling.copy}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {homeFeeling.points.map((point, index) => (
              <Reveal key={point.label} delay={index * 0.1}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-cream/5 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-body text-sm font-medium text-cream/90">
                    {point.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider color="#fff8ec" flip />
    </>
  );
}

export default HomeFeeling;
