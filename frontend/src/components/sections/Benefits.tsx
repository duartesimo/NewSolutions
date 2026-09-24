import { Zap, Settings, Headphones } from "lucide-react";

const benefits = [
  {
    title: "Fast & Reliable",
    description:
      "Modern solutions built with performance, scalability, and reliability in mind.",
    icon: Zap,
  },
  {
    title: "Custom Approach",
    description:
      "Every project is tailored to your business needs and specific goals.",
    icon: Settings,
  },
  {
    title: "Long-term Support",
    description:
      "We help you maintain, improve, and evolve your digital solutions over time.",
    icon: Headphones,
  },
];

function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div>
          <p className="text-center text-sm font-semibold tracking-widest text-blue-700 uppercase md:text-left">
            Why choose us
          </p>

          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-left">
            Solutions designed around your business
          </h2>

          <p className="mt-4 max-w-2xl text-center text-base leading-7 text-slate-600 sm:text-lg md:text-left">
            We combine technology, creativity, and expertise to build solutions
            that help businesses grow and succeed.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center gap-5 rounded-2xl bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Icon size={24} className="text-blue-700" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 leading-6 text-slate-600">
                    {benefit.description}
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

export default Benefits;
