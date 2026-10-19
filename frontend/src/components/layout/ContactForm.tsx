import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";
import type { ContactFormData } from "../../types/contact.types";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [feedback, setFeedback] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: { message?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.message ?? "Unable to send your message.");
        return;
      }

      setStatus("success");
      setFeedback("Thanks! Your message has been sent successfully.");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setFeedback("Unable to connect to the server. Please try again later.");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Send us a message
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fill out the form below and we'll get back to you shortly.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition outline-none focus:border-blue-700"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition outline-none focus:border-blue-700"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="text-sm font-medium text-slate-700"
          >
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company (optional)"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition outline-none focus:border-blue-700"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="text-sm font-medium text-slate-700"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition outline-none focus:border-blue-700"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-700"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your project..."
            className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm transition outline-none focus:border-blue-700"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          <Send size={18} />
        </button>

        {/* Feedback */}
        {feedback && (
          <p
            role={status === "error" ? "alert" : "status"}
            className={`text-sm ${
              status === "error" ? "text-red-600" : "text-green-700"
            }`}
          >
            {feedback}
          </p>
        )}

        <p className="text-xs text-slate-500">
          We'll never share your information with third parties.
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
