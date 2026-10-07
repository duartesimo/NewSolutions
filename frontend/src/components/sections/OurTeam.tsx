import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Daniel Silva",
    role: "Founder & Developer",
    description:
      "Focused on creating modern digital solutions that help businesses grow.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Sofia Martins",
    role: "UI/UX Designer",
    description:
      "Creating intuitive experiences with design, usability and creativity in mind.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
  },
  {
    name: "Miguel Costa",
    role: "Software Engineer",
    description:
      "Building reliable and scalable applications using modern technologies.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500",
  },
];

function OurTeam() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Our team
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl">
            Meet the people behind NewSolutions
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            A passionate team combining technology, creativity and strategy to
            build solutions that make a difference.
          </p>
        </div>

        {/* Team Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="h-72 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-950">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-700">
                  {member.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {member.description}
                </p>

                <a
                  href="#"
                  className="inline-flex text-slate-500 transition hover:text-blue-700"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
