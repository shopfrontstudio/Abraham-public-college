import { content } from "../content";
import Reveal from "./Reveal";

const accentGradients = {
  navy: "from-navy to-navy-dark",
  maroon: "from-maroon to-maroon-dark",
  gold: "from-gold to-[#a97f34]",
  blue: "from-[#8fbfe8] to-navy",
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

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {gallery.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm">
                {/*
                  Placeholder visual — replace this gradient div with:
                  <img src="/path-to-photo.jpg" alt={item.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                */}
                <div
                  className={`h-full w-full bg-gradient-to-br ${accentGradients[item.accent]} transition-transform duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 font-body text-xs font-medium text-navy shadow-sm">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
