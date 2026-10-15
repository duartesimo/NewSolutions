import type { Project } from "../types/projects.types.js";

const projects: Project[] = [
  {
    id: 1,
    title: "Atlas Dashboard",
    slug: "atlas-dashboard",
    description:
      "A modern analytics dashboard designed to help businesses understand their data and make better decisions.",
    category: "Web Application",
    technologies: ["React", "Node.js", "PostgreSQL"],
    year: 2026,
    featured: true,
  },
  {
    id: 2,
    title: "FlowDesk",
    slug: "flowdesk",
    description:
      "A workflow automation platform created to simplify repetitive business processes.",
    category: "Automation",
    technologies: ["React", "Express", "TypeScript"],
    year: 2026,
    featured: true,
  },
  {
    id: 3,
    title: "Northwind Commerce",
    slug: "northwind-commerce",
    description:
      "A responsive ecommerce experience focused on performance, usability and conversion.",
    category: "E-commerce",
    technologies: ["React", "TypeScript", "REST API"],
    year: 2025,
    featured: false,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}
