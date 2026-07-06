import { MapPin, PhoneCall, Navigation } from "lucide-react";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";

function Contact() {
  const { contact } = content;

  return (
    <section id="contact" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="flex items-center gap-4">
            <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
              {contact.heading}
            </h2>
            <span aria-hidden="true" className="hidden h-0.5 w-12 rounded bg-gold sm:block" />
          </span>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
            {contact.cards.map((card) => (
              <RevealItem
                key={card.label}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-navy/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <span>
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-maroon">
                    {card.label}
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-ink/85">
                    {card.value}
                  </p>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col gap-4">
              {/* Replace with a real Google Maps <iframe> embed when available. */}
              <div className="bg-dot-grid relative min-h-[180px] flex-1 overflow-hidden rounded-2xl bg-blue-card/60 shadow-inner">
                <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
                  <MapPin className="h-9 w-9 text-maroon drop-shadow" aria-hidden="true" />
                  <span className="rounded-full bg-white/90 px-3 py-1 font-body text-xs font-semibold text-navy shadow">
                    Map Placeholder
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <Magnetic strength={0.2} className="block">
                  <Ripple className="btn-shine relative block overflow-hidden rounded-lg">
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 rounded-lg bg-maroon px-6 py-3 font-body font-bold text-white transition-colors hover:bg-maroon-dark"
                    >
                      <PhoneCall className="h-4 w-4" aria-hidden="true" />
                      {contact.callLabel}
                    </a>
                  </Ripple>
                </Magnetic>
                <Magnetic strength={0.2} className="block">
                  <Ripple color="rgba(255,255,255,0.3)" className="relative block overflow-hidden rounded-lg">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 font-body font-bold text-white transition-colors hover:bg-navy-deep"
                    >
                      <Navigation className="h-4 w-4" aria-hidden="true" />
                      {contact.directionsLabel}
                    </a>
                  </Ripple>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
