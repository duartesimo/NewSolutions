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
        <div className="mt-12 rounded-3xl bg-blue-900 px-6 py-12 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurImpact;
