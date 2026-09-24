import { Code2, Bot, Layers } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites built with the latest technologies.",
  },
  {
    icon: Layers,
    title: "Software Solutions",
    description:
      "Custom software solutions designed around your business needs.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Intelligent automation tools that save time and improve efficiency.",
  },
];

function ServicesPreview() {

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Our services
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Solutions built for modern businesses
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            From websites to automation, we create digital solutions that help
            companies grow.
          </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-100">
                  <Icon size={24} className="text-blue-700" />
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
