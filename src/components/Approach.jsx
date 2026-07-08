import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const accents = {
  blue: { border: "border-b-blue-accent", chip: "bg-blue-card text-blue-accent" },
  green: { border: "border-b-green-accent", chip: "bg-green-soft text-green-accent" },
  gold: { border: "border-b-gold", chip: "bg-yellow-soft text-gold" },
  maroon: { border: "border-b-maroon", chip: "bg-maroon/10 text-maroon" },
};

// Centered heading flanked by short gold dashes, as in the mockup.
export function DashedHeading({ children }) {
  return (
    <span className="flex items-center justify-center gap-4">
      <span aria-hidden="true" className="h-0.5 w-8 rounded bg-gold" />
      {children}
      <span aria-hidden="true" className="h-0.5 w-8 rounded bg-gold" />
    </span>
  );
}

function Approach() {
  const { approach } = content;

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      <div aria-hidden="true" className="bg-dot-grid absolute right-6 top-16 h-32 w-32 opacity-40" />
      <div aria-hidden="true" className="bg-dot-grid absolute bottom-16 left-6 h-32 w-32 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-muted">
            {approach.label}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
            <DashedHeading>{approach.heading}</DashedHeading>
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {approach.items.map((item) => {
            const accent = accents[item.accent];
            return (
              <RevealItem key={item.title}>
                <SpotlightCard
                  className={`h-full rounded-2xl border-b-4 bg-white p-6 text-center shadow-lg shadow-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 ${accent.border}`}
                >
                  <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${accent.chip}`}>
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export default Approach;
