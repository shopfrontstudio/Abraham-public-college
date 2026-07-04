import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, PhoneCall } from "lucide-react";
import { content } from "../content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import StaggerText from "./StaggerText";
import SectionDivider from "./SectionDivider";

function Contact() {
  const { contact } = content;
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -50, reduceMotion ? 0 : 50]);

  const details = [
    { icon: MapPin, label: "Address", value: contact.address },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Clock, label: "Timings", value: contact.timings },
  ];

  return (
    <>
      <SectionDivider color="#14213d" />
      <section
        ref={sectionRef}
        id="contact"
        className="bg-dot-grid relative overflow-hidden bg-navy py-20 md:py-28"
      >
        <motion.div aria-hidden="true" className="absolute -right-24 -top-16" style={{ y: glowY }}>
          <div className="h-96 w-96 rounded-full bg-maroon/35 blur-3xl" />
        </motion.div>
        <div aria-hidden="true" className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              {contact.ctaEyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-cream md:text-4xl">
              <StaggerText text={contact.ctaHeadline} />
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mt-16 text-center font-heading text-2xl font-semibold text-cream">
              {contact.heading}
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.15}>
              <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
                {details.map(({ icon: DetailIcon, label, value }) => (
                  <RevealItem
                    key={label}
                    className="rounded-2xl border border-cream/15 bg-cream/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 hover:bg-cream/10"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <DetailIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-wide text-gold">
                      {label}
                    </p>
                    <p className="mt-1 font-body text-sm text-cream/80">{value}</p>
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="mt-6 flex flex-wrap gap-4">
                <Magnetic strength={0.25}>
                  <Ripple color="rgba(16,42,67,0.2)" className="btn-shine relative inline-block overflow-hidden rounded-full">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body font-medium text-navy-dark shadow-sm transition-shadow hover:shadow-lg hover:shadow-gold/30"
                    >
                      <Navigation className="h-4 w-4" aria-hidden="true" />
                      {contact.directionsLabel}
                    </a>
                  </Ripple>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Ripple color="rgba(255,248,236,0.15)" className="relative inline-block overflow-hidden rounded-full">
                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 font-body font-medium text-cream transition-colors hover:bg-cream/10"
                    >
                      <PhoneCall className="h-4 w-4" aria-hidden="true" />
                      {contact.callLabel}
                    </a>
                  </Ripple>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* Replace with a real Google Maps <iframe> embed once the school's map link is available. */}
              <div className="flex h-full min-h-[260px] items-center justify-center rounded-2xl border border-cream/15 bg-cream/5 text-cream/40 backdrop-blur-sm">
                <span className="font-body text-sm uppercase tracking-wide">
                  Google Map Placeholder
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
