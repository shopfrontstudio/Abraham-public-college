import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { content } from "../content";
import { Icon } from "../lib/icons";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";

const initialForm = {
  parentName: "",
  studentName: "",
  classInterested: "",
  phone: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 font-body text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/15";

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

  return (
    <section id="admissions" className="bg-cream py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-6 lg:grid-cols-[2fr_3fr]">
        {/* Left: warm "feels like home" card */}
        <Reveal>
          <div className="h-full rounded-3xl bg-gradient-to-br from-yellow-soft to-cream-deep p-8 shadow-lg shadow-navy/5 md:p-10">
            <h2 className="font-heading text-2xl font-bold leading-snug text-navy md:text-3xl">
              {homeFeeling.heading}
            </h2>
            <p className="mt-4 font-body leading-relaxed text-muted">
              {homeFeeling.copy}
            </p>

            <ul className="mt-8 grid grid-cols-3 gap-4">
              {homeFeeling.points.map((point) => (
                <li key={point.label} className="flex flex-col items-center gap-3 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gold shadow-md shadow-navy/10">
                    <Icon name={point.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-body text-xs font-semibold leading-snug text-navy">
                    {point.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right: admission enquiry card — steps beside the form */}
        <Reveal delay={0.15}>
          <div className="h-full rounded-3xl bg-white p-8 shadow-lg shadow-navy/5 md:p-10">
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="h-0.5 w-6 rounded bg-gold" />
              <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">
                {admissions.heading}
              </h2>
            </span>
            <p className="mt-2 font-body text-sm text-muted">{admissions.subtitle}</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_1.6fr]">
              <ol className="relative space-y-7">
                {/* Dotted connector line through the numbered steps. */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 left-4 top-4 w-px border-l-2 border-dotted border-maroon/30"
                />
                {admissions.steps.map((step, index) => (
                  <li key={step} className="relative flex items-center gap-4">
                    <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon font-body text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="font-body text-sm font-semibold text-ink">{step}</span>
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
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-green-soft px-6 py-10 text-center"
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
                      <Ripple className="btn-shine relative block w-full overflow-hidden rounded-lg">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-lg bg-maroon px-6 py-3 font-body font-bold text-white shadow-md shadow-maroon/20 transition-all hover:-translate-y-0.5 hover:bg-maroon-dark"
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
