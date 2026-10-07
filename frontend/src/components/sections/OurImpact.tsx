const stats = [
  {
    value: "50+",
    label: "Projects delivered",
  },
  {
    value: "98%",
    label: "Client satisfaction",
  },
  {
    value: "10+",
    label: "Industries supported",
  },
  {
    value: "4.9/5",
    label: "Average rating",
  },
];

function OurImpact() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Our impact
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
            Results that speak for themselves
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            We focus on building solutions that create real value and lasting
            impact for the businesses we work with.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center lg:px-8 ${
                index !== stats.length - 1
                  ? "lg:border-r-2 lg:border-slate-200"
                  : ""
              }`}
            >
              <p className="text-5xl font-bold tracking-tight text-blue-700 sm:text-6xl">
                {stat.value}
              </p>

              <p className="mt-3 text-base text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurImpact;
