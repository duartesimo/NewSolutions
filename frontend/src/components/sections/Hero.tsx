import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.webp";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Technology for modern businesses
          </p>

          <h1 className="max-w-2xl text-4xl leading-tight font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build digital solutions that help businesses{" "}
            <span className="text-blue-900">grow.</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            We design and develop modern websites, automate workflows, and
            create intelligent solutions that help businesses work smarter and
            grow faster.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-blue-900 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-800"
            >
              Contact us
            </Link>

            <Link
              to="/services"
              className="rounded-lg border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
            >
              View services
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:gap-6">
            <span>✓ Modern & scalable</span>
            <span>✓ Tailored solutions</span>
            <span>✓ Long-term support</span>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src={heroImage}
            alt="Team working with modern digital solutions"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
