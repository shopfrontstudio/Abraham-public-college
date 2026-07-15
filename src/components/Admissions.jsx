import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { gsap } from "../lib/gsap";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import SplitHeading from "./SplitHeading";

const initialForm = {
  parentName: "",
  studentName: "",
  classInterested: "",
  phone: "",
  message: "",
};

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-ruby focus:outline-none focus:ring-2 focus:ring-ruby/15";

function Admissions() {
  const { admissions, homeFeeling } = content;
  const { fields, submitLabel, successMessage } = admissions.form;
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  const homeRef = useRef(null);
  const stepsRef = useRef(null);

  // Left column: label and copy fade up around the SplitText heading.
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-home-fade]", {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        scrollTrigger: { trigger: homeRef.current, start: "top 80%", once: true },
      });
      gsap.from("[data-home-point]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.25,
        scrollTrigger: { trigger: homeRef.current, start: "top 80%", once: true },
      });
    },
    { scope: homeRef },
  );

  // Admission steps: the connector grows while each numbered badge pops in
  // sequence and its label slides alongside — the "how it works" story told
  // in order rather than all at once.
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({
        scrollTrigger: { trigger: stepsRef.current, start: "top 84%", once: true },
      });
      tl.from("[data-steps-line]", { scaleY: 0, duration: 1.1, ease: "power2.out" }, 0)
        .from(
          "[data-step-badge]",
          { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)", stagger: 0.18 },
          0.05,
        )
        .from(
          "[data-step-label]",
          { x: 14, opacity: 0, duration: 0.5, stagger: 0.18 },
          0.15,
        );
    },
    { scope: stepsRef },
  );

  return (
    <section id="admissions" className="relative overflow-hidden bg-ruby py-20 text-white md:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.055),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-7xl items-stretch gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        {/* Left: warm "feels like home" column, choreographed by GSAP */}
        <div ref={homeRef} className="flex h-full flex-col justify-center py-4 md:p-6">
          <span data-home-fade className="font-body text-xs font-bold uppercase tracking-[0.28em] text-gold-soft">A place to belong</span>
          <SplitHeading
            as="h2"
            className="mt-5 font-heading text-4xl font-semibold leading-[1.05] text-white md:text-6xl"
            stagger={0.06}
          >
            {homeFeeling.heading}
          </SplitHeading>
          <p data-home-fade className="mt-6 max-w-lg font-body text-base leading-8 text-white/76">
            {homeFeeling.copy}
          </p>

          <ul className="mt-10 grid grid-cols-3 gap-3 border-y border-white/16 py-6">
            {homeFeeling.points.map((point) => (
              <li key={point.label} data-home-point className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 bg-white/8 text-gold-soft">
                  <Icon name={point.icon} className="h-6 w-6" />
                </span>
                <span className="font-body text-[0.68rem] font-bold leading-snug text-white sm:text-xs">
                  {point.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: admission enquiry card — steps beside the form */}
        <Reveal delay={0.15}>
          <div className="h-full rounded-md bg-ivory p-6 text-ink shadow-2xl shadow-navy-deep/25 sm:p-8 md:p-10">
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="h-0.5 w-6 rounded bg-gold" />
              <h2 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
                {admissions.heading}
              </h2>
            </span>
            <p className="mt-2 font-body text-sm text-muted">{admissions.subtitle}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_1.6fr]">
              <ol ref={stepsRef} className="relative space-y-7">
                {/* Dotted connector line through the numbered steps — grows
                    downwards as the badges pop in sequence. */}
                <span
                  aria-hidden="true"
                  data-steps-line
                  className="absolute bottom-4 left-4 top-4 w-px origin-top border-l-2 border-dotted border-maroon/30"
                />
                {admissions.steps.map((step, index) => (
                  <li key={step} className="relative flex items-center gap-4">
                    <span data-step-badge className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon font-body text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span data-step-label className="font-body text-sm font-semibold text-ink">{step}</span>
                  </li>
                ))}
              </ol>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    role="status"
                    className="flex flex-col items-center justify-center gap-3 rounded-md bg-green-soft px-6 py-10 text-center"
                  >
                    <CheckCircle2 className="h-10 w-10 text-green-accent" aria-hidden="true" />
                    <p className="font-body font-semibold text-navy">{successMessage}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="sr-only">{fields.parentName}</span>
                        <input
                          name="parentName"
                          type="text"
                          required
                          placeholder={fields.parentName}
                          value={formData.parentName}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </label>
                      <label className="block">
                        <span className="sr-only">{fields.studentName}</span>
                        <input
                          name="studentName"
                          type="text"
                          required
                          placeholder={fields.studentName}
                          value={formData.studentName}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </label>
                      <label className="block">
                        <span className="sr-only">{fields.classInterested}</span>
                        <input
                          name="classInterested"
                          type="text"
                          required
                          placeholder={fields.classInterested}
                          value={formData.classInterested}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </label>
                      <label className="block">
                        <span className="sr-only">{fields.phone}</span>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder={fields.phone}
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="sr-only">{fields.message}</span>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder={fields.message}
                        value={formData.message}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </label>

                    <Magnetic strength={0.2} className="block w-full">
                      <Ripple className="btn-shine relative block w-full overflow-hidden rounded-md">
                        <button
                          type="submit"
                          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-ruby px-6 py-3 font-body font-bold text-white shadow-md shadow-ruby/20 transition-all hover:-translate-y-0.5 hover:bg-ruby-dark"
                        >
                          {submitLabel}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </Ripple>
                    </Magnetic>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Admissions;
