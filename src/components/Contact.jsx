import { content } from "../content";

function Contact() {
  const { contact } = content;

  return (
    <section id="contact" className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl font-semibold text-maroon md:text-4xl">
          {contact.heading}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <dl className="space-y-6 font-body text-ink/80">
            <div>
              <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-maroon">
                Address
              </dt>
              <dd className="mt-1">{contact.address}</dd>
            </div>
            <div>
              <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-maroon">
                Phone
              </dt>
              <dd className="mt-1">{contact.phone}</dd>
            </div>
            <div>
              <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-maroon">
                Email
              </dt>
              <dd className="mt-1">{contact.email}</dd>
            </div>
            <div>
              <dt className="font-heading text-sm font-semibold uppercase tracking-wide text-maroon">
                Timings
              </dt>
              <dd className="mt-1">{contact.timings}</dd>
            </div>
          </dl>

          <div className="flex min-h-[220px] items-center justify-center rounded-sm border border-gold-light bg-cream text-ink/50">
            <span className="font-body text-sm uppercase tracking-wide">
              Google Map Placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
