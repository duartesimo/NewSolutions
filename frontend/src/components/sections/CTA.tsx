import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl bg-blue-50 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        {/* Text */}
        <div className="max-w-2xl">
          <p className="text-center font-semibold tracking-widest text-blue-700 uppercase md:text-left">
            Let's build together
          </p>

          <h2 className="text-center mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-left">
            Ready to start your project?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
            Get in touch and let's discuss how NewSolutions can help your
            business grow.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
        >
          Contact us →
        </Link>
      </div>
    </section>
  );
}

export default CTA;
