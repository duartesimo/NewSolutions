const testimonials = [
  {
    quote:
      "NewSolutions helped us turn a rough idea into a polished website that finally reflects the quality of our business.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    name: "Daniel Foster",
    role: "Founder, Horizon Consulting",
  },
  {
    quote:
      "The automation work saved our team hours every week and made several repetitive processes much easier to manage.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    name: "Sofia Mendes",
    role: "Operations Manager, BrightFlow",
  },
  {
    quote:
      "From the first conversation to the final delivery, the process was clear, fast, and focused on what our company actually needed.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    name: "Lucas Bennett",
    role: "Product Lead, Northpeak Digital",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            What our clients say
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
            Trusted by businesses like yours
          </h2>
        </div>

        {/* Testimonials */}
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <blockquote className="flex-1 text-base leading-7 text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="size-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
