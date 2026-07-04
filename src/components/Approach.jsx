import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

function Approach() {
  const { approach } = content;

  return (
    <section className="bg-notebook-lines bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-semibold text-navy md:text-4xl">
            {approach.heading}
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {approach.items.map((item) => (
            <RevealItem key={item.title}>
              <div className="group h-full rounded-2xl border border-gold-light bg-gradient-to-b from-white to-cream-dark/60 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-lg">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-cream transition-colors duration-300 group-hover:bg-maroon">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/75">
                  {item.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default Approach;
