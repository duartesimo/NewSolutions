import { BarChart3, Monitor, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    paragraph:
      "We build modern, responsive and high-performance websites that help your business stand out and convert more customers.",
    checklist: [
      "Custom websites",
      "Responsive design",
      "SEO-friendly structure",
      "Ongoing support",
    ],
  },
  {
    icon: Settings,
    title: "Process Automation",
    paragraph:
      "We automate repetitive tasks and streamline workflows, helping your team save time and focus on what really matters.",
    checklist: [
      "Workflow automation",
      "Custom tools and integrations",
      "Time-saving solutions",
      "Increased productivity",
    ],
  },
  {
    icon: BarChart3,
    title: "Digital Solutions",
    paragraph:
      "We create tailored digital solutions to solve specific business challenges and help you work smarter and grow faster.",
    checklist: [
      "Custom web applications",
      "Internal tools",
      "API integrations",
      "Scalable solutions",
    ],
  },
];

function ServicesList() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            What we offer
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
            Services tailored to your needs
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            From modern websites to workflow automation, we provide tailored
            solutions that help your business operate more efficiently and grow
            with confidence.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Icon size={24} className="text-blue-700" />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {service.paragraph}
                </p>

                <ul className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
                  {service.checklist.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-8 font-semibold text-blue-900 transition hover:text-blue-700"
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
