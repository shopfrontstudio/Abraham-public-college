import { useState } from "react";
import { Building2, Camera, ChevronLeft, ChevronRight, MapPinned, School, Sparkles, Users, X } from "lucide-react";
import { content } from "../content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { DashedHeading } from "./Approach";

const categoryStyles = {
  navy: {
    icon: Building2,
    gradient: "from-navy to-navy-deep",
    chip: "bg-white/90 text-navy",
    tape: "bg-blue-card text-navy",
  },
  maroon: {
    icon: School,
    gradient: "from-maroon to-maroon-dark",
    chip: "bg-white/90 text-maroon",
    tape: "bg-cream text-maroon",
  },
  gold: {
    icon: Users,
    gradient: "from-gold to-[#a87c2a]",
    chip: "bg-navy/90 text-cream",
    tape: "bg-navy text-cream",
  },
  green: {
    icon: MapPinned,
    gradient: "from-green-accent to-navy",
    chip: "bg-white/90 text-green-accent",
    tape: "bg-yellow-soft text-navy",
  },
  blue: {
    icon: Sparkles,
    gradient: "from-blue-accent to-navy",
    chip: "bg-white/90 text-blue-accent",
    tape: "bg-cream text-navy",
  },
};

function imagePath(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

function GallerySticker({ category, onOpen }) {
  const style = categoryStyles[category.accent] ?? categoryStyles.navy;
  const CategoryIcon = style.icon;
  const hasPhotos = category.items.length > 0;
  const previewPhotos = category.items.slice(0, 4);

  return (
    <button
      type="button"
      onClick={() => hasPhotos && onOpen(category)}
      className={`group relative aspect-[1.04/1] w-full overflow-hidden rounded-2xl text-left shadow-xl shadow-navy/12 ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/18 hover:ring-gold/55 focus-visible:ring-2 focus-visible:ring-gold ${hasPhotos ? "cursor-pointer" : "cursor-default"}`}
      aria-label={hasPhotos ? `Open ${category.label} gallery` : category.label}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_32%),linear-gradient(to_top,rgba(0,0,0,0.6),transparent_62%)]" />

      <span
        className={`absolute left-3 top-3 z-30 inline-flex -rotate-3 items-center gap-1.5 rounded-sm px-4 py-2.5 font-body text-xs font-black uppercase tracking-[0.18em] shadow-lg shadow-navy/20 ring-1 ring-white/70 md:text-sm ${style.tape}`}
      >
        <span className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rotate-1 rounded-sm bg-white/45 shadow-sm" aria-hidden="true" />
        <CategoryIcon className="relative h-3.5 w-3.5" aria-hidden="true" />
        <span className="relative">{category.label}</span>
      </span>

      {hasPhotos ? (
        <div className="absolute inset-0">
          {previewPhotos.map((item, index) => (
            <img
              key={item.image}
              src={imagePath(item.image)}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-[78%] w-[82%] rounded-xl border-2 border-white/85 object-cover shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 ${
                index === 0
                  ? "-translate-x-1/2 -translate-y-1/2 rotate-[-7deg] group-hover:-translate-x-[58%] group-hover:-translate-y-[54%] group-hover:rotate-[-13deg]"
                  : index === 1
                    ? "-translate-x-[46%] -translate-y-[47%] rotate-[5deg] group-hover:-translate-x-[43%] group-hover:-translate-y-[53%] group-hover:rotate-[10deg]"
                    : index === 2
                      ? "-translate-x-[52%] -translate-y-[43%] rotate-[13deg] group-hover:-translate-x-[36%] group-hover:-translate-y-[37%] group-hover:rotate-[18deg]"
                      : "-translate-x-[48%] -translate-y-[49%] rotate-[-1deg] group-hover:-translate-x-[50%] group-hover:-translate-y-[39%] group-hover:rotate-[2deg]"
              }`}
              style={{ zIndex: index + 1 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/10 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-80 transition-transform duration-500 group-hover:scale-105">
          <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-[16%] right-[14%] h-28 w-28 rounded-full bg-gold/20 blur-3xl" />
        </div>
      )}

      {hasPhotos && (
        <>
          <span className={`absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-body text-xs font-bold shadow-sm ${style.chip}`}>
            <CategoryIcon className="h-4 w-4" aria-hidden="true" />
            {category.items.length} photos
          </span>
          <span className="absolute bottom-5 right-5 z-20 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm transition-transform duration-300 group-hover:translate-x-1">
            <Camera className="h-4 w-4" aria-hidden="true" />
          </span>
        </>
      )}
    </button>
  );
}

function GalleryModal({ category, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = category.items[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? category.items.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === category.items.length - 1 ? 0 : index + 1));
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/55 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${category.label} photos`}
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/35 bg-white/20 shadow-2xl shadow-navy/35 backdrop-blur-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-cream/25 to-white/10" aria-hidden="true" />
        <div className="relative grid gap-5 p-4 md:grid-cols-[1fr_16rem] md:p-6">
          <div className="relative overflow-hidden rounded-2xl bg-navy-deep/20">
            <img
              src={imagePath(activeItem.image)}
              alt={activeItem.alt}
              className="max-h-[62vh] min-h-[18rem] w-full object-contain"
            />
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-lg transition-colors hover:bg-white"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-lg transition-colors hover:bg-white"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex min-h-0 flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-maroon">
                  {category.label}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-navy">
                  {activeItem.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/85 text-navy shadow-sm transition-colors hover:bg-white"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 grid max-h-72 grid-cols-3 gap-3 overflow-y-auto pr-1 md:grid-cols-2">
              {category.items.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 bg-white/35 transition-all ${
                    activeIndex === index ? "border-gold shadow-lg shadow-gold/20" : "border-white/55 opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`View ${item.label}`}
                >
                  <img src={imagePath(item.image)} alt="" className="h-full w-full object-cover" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const { gallery } = content;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = gallery.categories ?? [];

  return (
    <section className="relative overflow-hidden bg-cream py-10 md:py-12">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-55" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream-deep to-transparent" aria-hidden="true" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold-soft/50 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-card/65 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-[92rem] px-4 md:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-body text-sm font-semibold uppercase tracking-widest text-maroon">
              Gallery
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-navy md:text-4xl">
              <DashedHeading>{gallery.heading}</DashedHeading>
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink/75">
              {gallery.intro}
            </p>
          </div>
        </Reveal>

        <div className="relative mt-6 rounded-[2rem] border border-gold/35 bg-white/65 p-4 shadow-2xl shadow-navy/10 backdrop-blur-sm md:mt-8 md:p-6">
          <div className="absolute -top-4 left-8 h-8 w-28 -rotate-3 rounded-sm bg-white/65 shadow-sm ring-1 ring-gold/25" aria-hidden="true" />
          <div className="absolute -top-4 right-10 h-8 w-28 rotate-3 rounded-sm bg-white/65 shadow-sm ring-1 ring-gold/25" aria-hidden="true" />
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6" stagger={0.07}>
            {categories.map((category) => (
              <RevealItem key={category.label}>
                <GallerySticker category={category} onOpen={setSelectedCategory} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {selectedCategory && (
        <GalleryModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      )}
    </section>
  );
}

export default Gallery;
