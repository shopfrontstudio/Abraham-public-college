import { MapPin, PhoneCall } from "lucide-react";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";

function GoogleMapsIcon() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-navy/10" aria-hidden="true">
      <span className="absolute h-5 w-5 rounded-full border-[5px] border-t-[#4285f4] border-r-[#34a853] border-b-[#fbbc05] border-l-[#ea4335]" />
      <span className="absolute right-2 top-4 h-1.5 w-4 rounded-full bg-[#4285f4]" />
    </span>
  );
}

function AppleMapsIcon() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-navy/10" aria-hidden="true">
      <span className="absolute inset-0 bg-[linear-gradient(135deg,#eff6ff_0_34%,#dcfce7_34%_58%,#fef3c7_58%_100%)]" />
      <span className="absolute left-2 top-0 h-full w-1 rotate-12 bg-white/80" />
      <span className="absolute bottom-1.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#2563eb] shadow-sm">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </span>
    </span>
  );
}

function Contact() {
  const { contact } = content;
  const encodedAddress = encodeURIComponent(contact.address);
  const satelliteMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=k&z=17&output=embed`;
  const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const appleDirectionsUrl = `https://maps.apple.com/?daddr=${encodedAddress}&dirflg=d`;

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
              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl bg-blue-card/60 shadow-xl shadow-navy/10 ring-1 ring-navy/10">
                <iframe
                  title={`${contact.heading} satellite map`}
                  src={satelliteMapUrl}
                  className="h-full min-h-[220px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 font-body text-xs font-bold text-navy shadow-lg backdrop-blur">
                  <MapPin className="h-4 w-4 text-maroon" aria-hidden="true" />
                  Satellite View
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
                <div className="rounded-2xl bg-white p-4 shadow-lg shadow-navy/5 ring-1 ring-navy/5">
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-maroon">
                    Directions
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <a
                      href={googleDirectionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-navy/10 bg-cream px-3 py-3 font-body text-sm font-bold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white hover:shadow-lg hover:shadow-navy/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      aria-label="Open directions in Google Maps"
                    >
                      <GoogleMapsIcon />
                      Google
                    </a>
                    <a
                      href={appleDirectionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-navy/10 bg-cream px-3 py-3 font-body text-sm font-bold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white hover:shadow-lg hover:shadow-navy/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      aria-label="Open directions in Apple Maps"
                    >
                      <AppleMapsIcon />
                      Apple
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
