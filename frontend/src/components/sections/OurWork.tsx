import { useEffect, useState } from "react";
import type { Project } from "../../types/projects.types";
import SectionHeader from "../ui/SectionHeader";
import { API_URL } from "../../config/api.js";

function OurWork() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`${API_URL}/api/projects`);

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: Project[] = await response.json();

        setProjects(data);
      } catch {
        setError("Unable to load projects.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          eyebrow="Our work"
          title="Projects we've helped bring to life"
          description="A selection of digital solutions we've created to help businesses
            solve problems and grow."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-blue-700">
                {project.category}
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
