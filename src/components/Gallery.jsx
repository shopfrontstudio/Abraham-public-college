import { Camera, MapPinned, Sparkles } from "lucide-react";
import { content } from "../content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import TiltCard from "./TiltCard";

const groupStyles = {
  Trips: {
    icon: MapPinned,
    sectionClass: "md:grid-cols-2",
    cardClass: "aspect-[4/3]",
    stickerClass: "bg-maroon text-cream",
  },
  Activities: {
    icon: Sparkles,
    sectionClass: "sm:grid-cols-2 lg:grid-cols-3",
    cardClass: "aspect-[5/4]",
    stickerClass: "bg-gold text-navy",
  },
};

function GalleryCard({ item, group, index }) {
  const style = groupStyles[group.label];

  return (
    <TiltCard
      max={group.label === "Trips" ? 4 : 3}
      className={`group relative w-full overflow-hidden rounded-2xl border border-gold-light bg-cream shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10 ${style.cardClass}`}
    >
      <img
        src={item.image}
        alt={item.alt}
        loading={index > 1 ? "lazy" : "eager"}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-navy-dark/10 to-transparent" />
      <span
        className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-xs font-semibold shadow-sm ${style.stickerClass}`}
      >
        <Camera className="h-3.5 w-3.5" aria-hidden="true" />
        {group.sticker}
      </span>
      <p className="absolute bottom-4 left-4 right-4 font-heading text-lg font-semibold leading-tight text-white drop-shadow">
        {item.label}
      </p>
    </TiltCard>
  );
}

function Gallery() {
  const { gallery } = content;

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-45" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream/80 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-body text-sm font-semibold uppercase tracking-widest text-maroon">
              Gallery
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-navy md:text-4xl">
              {gallery.heading}
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink/75">
              {gallery.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-16">
          {gallery.groups.map((group) => {
            const style = groupStyles[group.label];
            const GroupIcon = style.icon;

            return (
              <div key={group.label}>
                <Reveal>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream">
                      <GroupIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-2xl font-semibold text-navy">
                      {group.label}
                    </h3>
                  </div>
                </Reveal>

                <RevealGroup className={`grid gap-5 ${style.sectionClass}`} stagger={0.07}>
                  {group.items.map((item, index) => (
                    <RevealItem key={item.image}>
                      <GalleryCard item={item} group={group} index={index} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
