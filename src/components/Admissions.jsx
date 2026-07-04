import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { content } from "../content";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";

const initialForm = {
  parentName: "",
  studentName: "",
  classInterested: "",
  phone: "",
  message: "",
};

function Admissions() {
  const { admissions } = content;
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
    <section id="admissions" className="bg-grid-lines bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-semibold text-navy md:text-4xl">
            {admissions.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-body text-lg leading-relaxed text-ink/80">
            {admissions.copy}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-2" delay={0.1}>
            <div className="h-full rounded-3xl bg-navy p-8 text-cream">
              <h3 className="font-heading text-xl font-semibold">
                How admission works
              </h3>
              <RevealGroup as="ol" className="mt-6 space-y-6" stagger={0.12}>
                {admissions.steps.map((step, index) => (
                  <RevealItem as="li" key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 font-heading text-sm font-semibold text-gold">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-body font-semibold text-cream">
                        {step.title}
                      </p>
                      <p className="mt-1 font-body text-sm text-cream/75">
                        {step.description}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.2}>
            <div className="h-full rounded-3xl border border-gold-light bg-white p-8 shadow-sm">
              <p className="font-heading text-lg font-medium text-maroon">
                {admissions.ctaText}
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    role="status"
                    className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-gold bg-cream px-6 py-10 text-center"
                  >
                    <CheckCircle2 className="h-10 w-10 text-maroon" aria-hidden="true" />
                    <p className="font-body text-navy">{successMessage}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                  >
                    <div>
                      <label htmlFor="parentName" className="mb-1 block font-body text-sm text-ink/70">
                        {fields.parentName}
                      </label>
                      <input
                        id="parentName"
                        name="parentName"
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gold-light bg-cream px-4 py-3 font-body text-ink transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="studentName" className="mb-1 block font-body text-sm text-ink/70">
                        {fields.studentName}
                      </label>
                      <input
                        id="studentName"
                        name="studentName"
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gold-light bg-cream px-4 py-3 font-body text-ink transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="classInterested" className="mb-1 block font-body text-sm text-ink/70">
                          {fields.classInterested}
                        </label>
                        <input
                          id="classInterested"
                          name="classInterested"
                          type="text"
                          required
                          value={formData.classInterested}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gold-light bg-cream px-4 py-3 font-body text-ink transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-1 block font-body text-sm text-ink/70">
                          {fields.phone}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gold-light bg-cream px-4 py-3 font-body text-ink transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1 block font-body text-sm text-ink/70">
                        {fields.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gold-light bg-cream px-4 py-3 font-body text-ink transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20"
                      />
                    </div>

                    <Magnetic strength={0.2} className="block w-full">
                      <Ripple className="btn-shine relative block w-full overflow-hidden rounded-full">
                        <button
                          type="submit"
                          className="w-full rounded-full bg-maroon px-6 py-3 font-body font-medium text-cream shadow-sm transition-shadow hover:shadow-lg hover:shadow-maroon/20"
                        >
                          {submitLabel}
                        </button>
                      </Ripple>
                    </Magnetic>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Admissions;
