import { prisma } from "../../prisma/prisma.js";

export async function getAllProjects() {
  return prisma.project.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function findProjectBySlug(slug: string) {
  return prisma.project.findUnique({
    where: {
      slug,
    },
  });
}
