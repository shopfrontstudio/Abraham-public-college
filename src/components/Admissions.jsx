import { useState } from "react";
import { content } from "../content";

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
    <section id="admissions" className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center font-heading text-3xl font-semibold text-maroon md:text-4xl">
          {admissions.heading}
        </h2>
        <p className="mt-6 text-center font-body text-lg leading-relaxed text-ink/80">
          {admissions.copy}
        </p>

        {submitted ? (
          <div
            role="status"
            className="mt-10 rounded-sm border border-gold bg-cream px-6 py-8 text-center font-body text-maroon"
          >
            {successMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
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
                className="w-full rounded-sm border border-gold-light bg-cream px-4 py-3 font-body text-ink focus:border-maroon focus:outline-none"
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
                className="w-full rounded-sm border border-gold-light bg-cream px-4 py-3 font-body text-ink focus:border-maroon focus:outline-none"
              />
            </div>

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
                className="w-full rounded-sm border border-gold-light bg-cream px-4 py-3 font-body text-ink focus:border-maroon focus:outline-none"
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
                className="w-full rounded-sm border border-gold-light bg-cream px-4 py-3 font-body text-ink focus:border-maroon focus:outline-none"
              />
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
                className="w-full rounded-sm border border-gold-light bg-cream px-4 py-3 font-body text-ink focus:border-maroon focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-maroon px-6 py-3 font-body text-cream transition-colors hover:bg-maroon-dark"
            >
              {submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Admissions;
