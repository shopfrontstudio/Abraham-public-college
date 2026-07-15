import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight, PhoneCall } from "lucide-react";
import { content } from "../content";
import { EASE } from "../lib/motion";
import { useIntro } from "../lib/intro-context";
import { useMediaQuery } from "../lib/use-media-query";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import Crest from "./Crest";
import SplitHeading from "./SplitHeading";

const studentPhoto = `${import.meta.env.BASE_URL}gallery/students-14.jpg`;
const activityPhoto = `${import.meta.env.BASE_URL}gallery/activity-art-showcase.jpg`;

function HeroStory({ animated, mobileContinuation, photosStyle, reduceMotion, storyStyle }) {
  const { hero } = content;

  return (
    <motion.div
      className={`relative z-10 mx-auto flex max-w-7xl items-center px-5 sm:px-6 lg:pt-24 ${animated ? "opacity-0" : ""} ${
        mobileContinuation
          ? "min-h-[100svh] pb-12 pt-[8.5rem]"
          : animated
            ? "min-h-[100svh] pb-12 pt-28 lg:pb-16"
            : "min-h-[92svh] pb-6 pt-[8.5rem] sm:pt-28 lg:pb-6 lg:pt-24"
      }`}
      style={animated ? storyStyle : undefined}
      initial={animated || reduceMotion ? false : { opacity: 0 }}
      animate={animated ? undefined : { opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="grid w-full items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="relative z-20 max-w-2xl">
          <div className="mb-6 flex items-center gap-4 sm:mb-7">
            <span className="h-px w-10 bg-gold sm:w-12" aria-hidden="true" />
            <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.26em] text-gold sm:text-[0.68rem] sm:tracking-[0.3em]">
              Welcome to Abraham
            </span>
          </div>
          {/* On first (intro) visits the framer-motion story owns the hero
              entrance, so the SplitText reveal is disabled to avoid a double
              animation. Return visits get the masked word-by-word rise. */}
          <SplitHeading
            as="h1"
            disabled={animated}
            stagger={0.07}
            start="top 92%"
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

        <motion.div
          className="relative mx-auto mt-2 w-full max-w-2xl sm:mt-0 lg:mx-0"
          style={animated ? photosStyle : undefined}
        >
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
        </motion.div>

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
    </motion.div>
  );
}

function Hero() {
  const introStageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { headerVisible, progress, setHeaderVisible } = useIntro();
  const { school } = content;
  const playIntro = !reduceMotion;

  const { scrollYProgress } = useScroll({
    target: introStageRef,
    offset: ["start start", "end end"],
  });

  const crestScale = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.34, 0.72, 0.94] : [0, 0.3, 0.72, 0.96],
    isMobile ? [1, 0.92, 0.44, 0.16] : [1, 0.92, 0.54, 0.14],
  );
  const crestX = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.48, 0.94] : [0, 0.58, 0.96],
    isMobile ? ["0vw", "0vw", "-38vw"] : ["0vw", "0vw", "-39vw"],
  );
  const crestY = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.4, 0.94] : [0, 0.48, 0.96],
    isMobile ? ["-7vh", "-7vh", "-40vh"] : ["0vh", "-2vh", "-45vh"],
  );
  const crestOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.76, 0.94] : [0, 0.88, 0.96],
    [1, 1, 0],
  );
  const introCopyOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.1, 0.64, 0.9] : [0, 0.1, 0.34, 0.56],
    [0, 1, 1, 0],
  );
  const introCopyY = useTransform(scrollYProgress, [0, 0.22, 0.9], [20, 0, -22]);
  const storyOpacity = useTransform(scrollYProgress, [0.44, 0.66, 1], [0, 1, 1]);
  const storyY = useTransform(scrollYProgress, [0.44, 0.76, 1], [70, 0, 0]);
  const photosY = useTransform(scrollYProgress, [0.46, 0.78, 1], [150, 0, -12]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.18, 0.34], [1, 1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!playIntro) return;
    progress.set(value);
    if (!isMobile) setHeaderVisible(value >= 0.79);
  });

  useEffect(() => {
    if (isMobile) setHeaderVisible(true);
    if (!playIntro) {
      progress.set(1);
      setHeaderVisible(true);
    }
  }, [isMobile, playIntro, progress, setHeaderVisible]);

  return (
    <section id="home" className="royal-hero relative overflow-hidden bg-navy-deep">
      <div
        ref={introStageRef}
        className={playIntro ? (isMobile ? "h-[150svh]" : "h-[180svh]") : "min-h-[92svh]"}
      >
        <div className={`${playIntro ? "sticky top-0 min-h-[100svh]" : "relative min-h-[92svh]"} overflow-hidden`}>
          <div aria-hidden="true" className="royal-hero__texture absolute inset-0" />
          <div aria-hidden="true" className="royal-hero__light absolute inset-0" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/65 to-transparent" />

          {playIntro && (
            <>
              <motion.div
                className="pointer-events-none absolute left-1/2 top-[44%] z-30 w-[min(68vw,20rem)] -translate-x-1/2 -translate-y-1/2 will-change-transform md:top-1/2 md:w-[min(72vw,29rem)]"
                style={{ opacity: crestOpacity, scale: crestScale, x: crestX, y: crestY }}
                aria-hidden="true"
              >
                <div className="royal-crest-glow absolute inset-[8%] rounded-full" />
                <Crest className="relative w-full drop-shadow-[0_28px_55px_rgba(0,0,0,0.38)]" />
              </motion.div>

              <motion.div
                className="pointer-events-none absolute inset-x-6 top-[68%] z-20 text-center sm:top-[76%]"
                style={{ opacity: introCopyOpacity, y: introCopyY }}
              >
                <p className="font-body text-[0.58rem] font-bold uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.38em]">
                  Estd. 2004 · Lucknow
                </p>
                <p className="mt-3 font-heading text-xl font-semibold text-ivory sm:text-4xl">{school.name}</p>
                <p className="mt-2 font-heading text-sm italic text-gold-soft sm:text-xl">{school.tagline}</p>
              </motion.div>

              {(!headerVisible || isMobile) && (
                <motion.div
                  className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center"
                  style={{ opacity: scrollCueOpacity }}
                  aria-hidden="true"
                >
                  <span className="font-body text-[0.62rem] font-bold uppercase tracking-[0.28em] text-white/55">
                    Scroll to enter
                  </span>
                  <ArrowDown className="mx-auto mt-2 h-5 w-5 animate-[royal-bob_1.8s_ease-in-out_infinite] text-gold" />
                </motion.div>
              )}
            </>
          )}

          {(!playIntro || !isMobile) && (
            <HeroStory
              animated={playIntro}
              mobileContinuation={false}
              photosStyle={{ y: photosY }}
              reduceMotion={reduceMotion}
              storyStyle={{ opacity: storyOpacity, y: storyY }}
            />
          )}
        </div>
      </div>

      {playIntro && isMobile && (
        <div className="relative border-t border-gold/20 bg-navy-deep">
          <div aria-hidden="true" className="royal-hero__texture absolute inset-0" />
          <div aria-hidden="true" className="royal-hero__light absolute inset-0 opacity-70" />
          <HeroStory
            animated={false}
            mobileContinuation
            photosStyle={undefined}
            reduceMotion={reduceMotion}
            storyStyle={undefined}
          />
        </div>
      )}
    </section>
  );
}

export default Hero;
