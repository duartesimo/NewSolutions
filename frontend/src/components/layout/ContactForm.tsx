import { Send } from "lucide-react";

function ContactForm() {
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
      <form className="mt-8 flex flex-col gap-5">
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
              type="text"
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
              type="email"
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
            type="text"
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
            type="text"
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
            rows={5}
            placeholder="Tell us more about your project..."
            className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm transition outline-none focus:border-blue-700"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
        >
          Send message
          <Send size={18} />
        </button>

        <p className="text-xs text-slate-500">
          We'll never share your information with third parties.
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
