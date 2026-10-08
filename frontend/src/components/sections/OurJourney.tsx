const milestones = [
  {
    year: "2023",
    title: "Company founded",
    description:
      "NewSolutions started with a simple mission: helping businesses grow through technology.",
  },
  {
    year: "2024",
    title: "First projects delivered",
    description:
      "We partnered with businesses to create modern websites and digital solutions.",
  },
  {
    year: "2025",
    title: "Expanding our services",
    description:
      "We expanded our expertise into automation, software development and digital strategy.",
  },
  {
    year: "2026",
    title: "Building the future",
    description:
      "Continuing to create impactful solutions and long-term partnerships.",
  },
];

function OurJourney() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Our journey
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
            How we got here
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From a simple idea to a growing digital solutions company.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-slate-200 lg:left-1/2" />

          <div className="flex flex-col gap-12">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className="relative grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {/* Dot */}
                <div className="absolute top-2 left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-blue-700 ring-8 ring-slate-50 lg:left-1/2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Content */}
                <div
                  className={`pl-16 sm:pl-0 ${
                    index % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <p className="text-3xl font-bold text-blue-700">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
