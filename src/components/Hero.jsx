import { content } from "../content";
import ImagePlaceholder from "./ImagePlaceholder";

function Hero() {
  const { hero } = content;

  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-maroon md:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink/80">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="rounded-sm bg-maroon px-6 py-3 font-body text-cream transition-colors hover:bg-maroon-dark"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-maroon px-6 py-3 font-body text-maroon transition-colors hover:bg-maroon hover:text-cream"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <ImagePlaceholder
          label="School Photo"
          className="aspect-4/3 w-full rounded-sm"
        />
      </div>
    </section>
  );
}

export default Hero;
