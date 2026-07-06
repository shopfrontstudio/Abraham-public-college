import { content } from "../content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { DashedHeading } from "./Approach";

const accentGradients = {
  navy: "from-navy to-navy-deep",
  maroon: "from-maroon to-maroon-dark",
  gold: "from-gold to-[#a87c2a]",
  green: "from-green-accent to-navy",
};

function Gallery() {
  const { gallery } = content;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            <DashedHeading>{gallery.heading}</DashedHeading>
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4" stagger={0.08}>
          {gallery.items.map((item) => (
            <RevealItem key={item.label}>
              <figure className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-navy/10">
                {/*
                  Placeholder visual — replace this gradient div with a real photo:
                  <img src="/photos/school-building.jpg" alt={item.label}
                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                */}
                <div
                  className={`h-full w-full bg-gradient-to-br ${accentGradients[item.accent]} transition-transform duration-500 group-hover:scale-110`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 font-body text-sm font-semibold text-white">
                  {item.label}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-6 text-center font-body text-xs text-muted">{gallery.note}</p>
      </div>
    </section>
  );
}

export default Gallery;
