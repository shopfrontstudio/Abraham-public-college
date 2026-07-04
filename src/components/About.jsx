import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal from "./Reveal";

function About() {
  const { about } = content;

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink/80">
              {about.copy}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-gold-light bg-cream px-4 py-3 font-body text-ink/80"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-gold-light bg-gradient-to-br from-cream-dark to-cream p-8 shadow-sm">
              <blockquote className="border-l-4 border-gold pl-5 font-heading text-xl italic leading-snug text-navy">
                “{about.quote}”
              </blockquote>

              <h3 className="mt-8 font-heading text-lg font-semibold text-navy">
                {about.valuesCard.heading}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {about.valuesCard.points.map((point) => (
                  <div
                    key={point.label}
                    className="flex flex-col items-start gap-2 rounded-xl bg-white/70 p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                      <Icon name={point.icon} className="h-4 w-4" />
                    </span>
                    <span className="font-body text-sm font-medium text-ink/80">
                      {point.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
