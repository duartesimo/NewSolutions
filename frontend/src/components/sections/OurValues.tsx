import { HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Client-focused",
    description:
      "We take the time to understand your business and build solutions tailored to your goals.",
  },
  {
    icon: Lightbulb,
    title: "Quality & reliability",
    description:
      "We are committed to delivering modern solutions that are scalable, effective and maintainable.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term partnership",
    description:
      "We believe in lasting relationships and continuous support beyond project delivery.",
  },
];

function OurValues() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Our values
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
            What drives us
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            These are the principles that guide our work and shape the way we
            collaborate with our clients.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Icon size={24} className="text-blue-700" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {value.description}
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

export default OurValues;
