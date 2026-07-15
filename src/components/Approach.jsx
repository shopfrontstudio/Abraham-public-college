import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const accents = {
  blue: { card: "bg-royal-blue text-white", chip: "border-white/20 bg-white/10 text-gold-soft" },
  green: { card: "bg-emerald text-white", chip: "border-white/20 bg-white/10 text-gold-soft" },
  gold: { card: "bg-gold text-navy-deep", chip: "border-navy/15 bg-navy/8 text-navy" },
  maroon: { card: "bg-ruby text-white", chip: "border-white/20 bg-white/10 text-gold-soft" },
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
    <section className="relative overflow-hidden bg-ivory py-20 md:py-28">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-y-0 right-0 w-1/3 opacity-25" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-ruby">
            {approach.label}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-semibold text-navy md:text-6xl">
            <DashedHeading>{approach.heading}</DashedHeading>
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {approach.items.map((item) => {
            const accent = accents[item.accent];
            return (
              <RevealItem key={item.title}>
                <SpotlightCard
                  className={`h-full min-h-[19rem] rounded-md p-7 text-left shadow-xl shadow-navy/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/18 ${accent.card}`}
                >
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full border ${accent.chip}`}>
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-12 font-heading text-2xl font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-7 opacity-80">
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
