import { MapPin, Phone, Mail, Clock, Navigation, PhoneCall } from "lucide-react";
import { content } from "../content";
import Reveal from "./Reveal";

function Contact() {
  const { contact } = content;

  const details = [
    { icon: MapPin, label: "Address", value: contact.address },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Clock, label: "Timings", value: contact.timings },
  ];

  return (
    <section id="contact" className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-semibold text-navy md:text-4xl">
            {contact.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.map(({ icon: DetailIcon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gold-light bg-white p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <DetailIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-wide text-maroon">
                    {label}
                  </p>
                  <p className="mt-1 font-body text-sm text-ink/80">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-body font-medium text-cream shadow-sm transition-all hover:-translate-y-0.5 hover:bg-navy-dark hover:shadow-md"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                {contact.directionsLabel}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-maroon px-6 py-3 font-body font-medium text-maroon transition-all hover:-translate-y-0.5 hover:bg-maroon hover:text-cream"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {contact.callLabel}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            {/* Replace with a real Google Maps <iframe> embed once the school's map link is available. */}
            <div className="flex h-full min-h-[260px] items-center justify-center rounded-2xl border border-gold-light bg-white text-ink/40">
              <span className="font-body text-sm uppercase tracking-wide">
                Google Map Placeholder
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
