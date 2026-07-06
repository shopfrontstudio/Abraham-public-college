import { content } from "../content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import TiltCard from "./TiltCard";

const accentGradients = {
  navy: "from-navy to-navy-dark",
  coral: "from-coral to-coral-dark",
  sun: "from-sun to-[#a87c1f]",
  sage: "from-sage to-navy",
};

function Gallery() {
  const { gallery } = content;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-semibold text-navy md:text-4xl">
            {gallery.heading}
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4" stagger={0.08}>
          {gallery.items.map((item) => (
            <RevealItem key={item.label}>
              <TiltCard max={5} className="group relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-navy shadow-sticker-sm transition-shadow duration-300 hover:shadow-sticker">
                {/*
                  Placeholder visual — replace this gradient div with:
                  <img src="/path-to-photo.jpg" alt={item.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                */}
                <div
                  className={`h-full w-full bg-gradient-to-br ${accentGradients[item.accent]} transition-transform duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                <span className="absolute bottom-3 left-3 rounded-full border border-navy/20 bg-paper px-3 py-1 font-body text-xs font-bold text-navy">
                  {item.label}
                </span>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default Gallery;
