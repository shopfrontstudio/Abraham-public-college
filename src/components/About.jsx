import { content } from "../content";

function About() {
  const { about } = content;

  return (
    <section id="about" className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-maroon md:text-4xl">
          {about.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
          {about.copy}
        </p>

        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {about.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-sm border border-gold-light bg-cream px-4 py-3 text-left font-body text-ink/80"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
