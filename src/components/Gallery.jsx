import { content } from "../content";
import ImagePlaceholder from "./ImagePlaceholder";

function Gallery() {
  const { gallery } = content;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl font-semibold text-maroon md:text-4xl">
          {gallery.heading}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.items.map((item) => (
            <ImagePlaceholder
              key={item.label}
              label={item.label}
              className="aspect-square w-full rounded-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
