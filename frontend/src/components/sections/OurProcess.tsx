import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, goals, and challenges to understand exactly what you need.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a clear strategy and define the best approach for your digital solution.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop your solution using modern technologies and best practices.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deliver your project and continue supporting you as your business grows.",
  },
];

function OurProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <SectionHeader
          eyebrow="Our process"
          title="A simple and clear process"
          description="We make it easy to transform your ideas into effective digital
            solutions through a structured and transparent approach."
        />

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 bg-white">
              <span className="text-5xl font-bold text-blue-100">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
