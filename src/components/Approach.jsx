import { content } from "../content";

function Approach() {
  const { approach } = content;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl font-semibold text-maroon md:text-4xl">
          {approach.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approach.items.map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-gold-light bg-cream-dark p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 h-1 w-10 bg-gold" />
              <h3 className="font-heading text-lg font-semibold text-maroon">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
