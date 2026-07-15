import { ArrowRight, PhoneCall } from "lucide-react";
import { content } from "../content";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import Crest from "./Crest";
import SplitHeading from "./SplitHeading";

const studentPhoto = `${import.meta.env.BASE_URL}gallery/students-14.jpg`;
const activityPhoto = `${import.meta.env.BASE_URL}gallery/activity-art-showcase.jpg`;

function Hero() {
  const { hero } = content;

  return (
    <section id="home" className="royal-hero relative min-h-[92svh] overflow-hidden bg-navy-deep">
      <div aria-hidden="true" className="royal-hero__texture absolute inset-0" />
      <div aria-hidden="true" className="royal-hero__light absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/65 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-5 pb-6 pt-[8.5rem] sm:px-6 sm:pt-28 lg:pb-6 lg:pt-24">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative z-20 max-w-2xl">
            <div className="mb-6 flex items-center gap-4 sm:mb-7">
              <span className="h-px w-10 bg-gold sm:w-12" aria-hidden="true" />
              <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.26em] text-gold sm:text-[0.68rem] sm:tracking-[0.3em]">
                Welcome to Abraham
              </span>
            </div>

            <SplitHeading
              as="h1"
              disabled
              className="font-heading text-[clamp(2.65rem,12vw,5.6rem)] font-semibold leading-[0.94] text-ivory sm:leading-[0.92]"
            >
              {hero.headlineLead}
              <span className="mt-2 block text-gold">{hero.headlineAccent}</span>
            </SplitHeading>

            <p className="mt-6 max-w-xl font-body text-[0.98rem] leading-7 text-white/76 sm:text-lg sm:leading-8">
              {hero.subheadline}
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <Magnetic strength={0.28}>
                <Ripple className="btn-shine relative block overflow-hidden rounded-md sm:inline-block">
                  <a
                    href="#admissions"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-ruby px-6 py-3 font-body font-bold text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-ruby-dark sm:w-auto"
                  >
                    {hero.primaryCta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Ripple>
              </Magnetic>
              <Magnetic strength={0.24}>
                <Ripple color="rgba(255,255,255,0.14)" className="relative block overflow-hidden rounded-md sm:inline-block">
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-gold/45 bg-white/6 px-6 py-3 font-body font-bold text-ivory backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white/10 sm:w-auto"
                  >
                    {hero.secondaryCta}
                    <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Ripple>
              </Magnetic>
            </div>
          </div>

          <div className="relative mx-auto mt-2 w-full max-w-2xl sm:mt-0 lg:mx-0">
            <div aria-hidden="true" className="absolute -left-10 -top-12 h-56 w-56 rounded-full border border-gold/15" />
            <div aria-hidden="true" className="absolute -left-4 -top-6 h-44 w-44 rounded-full border border-gold/25" />
            <div className="relative grid grid-cols-[1fr_0.72fr] items-end gap-3 sm:gap-5">
              <figure className="relative overflow-hidden rounded-md border border-white/15 bg-navy shadow-2xl shadow-black/35">
                <img
                  src={studentPhoto}
                  alt="Young Abraham Public College students together in their classroom"
                  className="h-52 w-full object-cover object-center sm:h-auto sm:aspect-[4/4.4]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" aria-hidden="true" />
                <figcaption className="absolute bottom-4 left-4 right-4 font-body text-xs font-bold uppercase tracking-[0.18em] text-white/85">
                  Confidence begins here
                </figcaption>
              </figure>

              <div className="space-y-3 sm:space-y-5">
                <div className="relative mx-auto w-[68%]">
                  <div className="royal-crest-glow absolute inset-2 rounded-full" aria-hidden="true" />
                  <Crest className="relative w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)]" />
                </div>
                <figure className="relative overflow-hidden rounded-md border border-gold/25 shadow-2xl shadow-black/30">
                  <img
                    src={activityPhoto}
                    alt="Abraham Public College students proudly presenting their artwork"
                    className="h-36 w-full object-cover sm:h-auto sm:aspect-[4/5]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald/60 via-transparent to-transparent" aria-hidden="true" />
                </figure>
              </div>
            </div>
          </div>

          <ul className="hidden grid-cols-4 gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid lg:col-span-2">
            {hero.trustBadges.map((badge) => (
              <li key={badge.label} className="bg-navy-deep/88 px-3 py-3 text-center sm:px-4">
                <span className="font-body text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gold-soft">
                  {badge.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
