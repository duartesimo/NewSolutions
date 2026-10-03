import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-blue-50 px-6 py-12 text-center sm:px-12 sm:py-16">
          {/* Background shapes */}
          <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-blue-100" />

          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-100" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
              Let's build together
            </p>

            <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ready to start your project?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Have an idea in mind? Get in touch and let's discuss how we can
              create the right digital solution for your business.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
            >
              Contact us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
