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
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Our process
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
            A simple and clear process
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            We make it easy to transform your ideas into effective digital
            solutions through a structured and transparent approach.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">
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
