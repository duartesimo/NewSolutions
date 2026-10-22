import { prisma } from "./prisma.js";

const projects = [
  {
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

async function main() {
  for (const project of projects) {
    await prisma.project.upsert({
      where: {
        slug: project.slug,
      },
      update: project,
      create: project,
    });
  }

  console.log(`Seeded ${projects.length} projects.`);
}

main()
  .catch((error) => {
    console.error("Failed to seed projects:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
