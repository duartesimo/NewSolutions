import { ArrowRight, BarChart3, Monitor, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/services-hero.webp";

const highlights = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Modern, high-performance websites that convert visitors into customers.",
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Automate repetitive tasks and streamline your workflows.",
  },
  {
    icon: BarChart3,
    title: "Digital Solutions",
    description:
      "Tailored applications and integrations to solve your business challenges.",
  },
];

function ServicesHero() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Hero */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
              Our services
            </p>

            <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Digital solutions to help your business{" "}
              <span className="text-blue-700">grow</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              We design, develop and implement modern solutions that help
              businesses work more efficiently, reach more customers and achieve
              their goals.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
              >
                Get started
                <ArrowRight size={18} />
              </Link>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Our services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="min-w-0">
            <div className="rounded-3xl bg-blue-50 p-3 sm:p-5">
              <img
                src={heroImage}
                alt="Modern workspace with digital business solutions"
                className="block h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-slate-100 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <div
                key={highlight.title}
                className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon size={26} className="text-blue-700" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    {highlight.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
