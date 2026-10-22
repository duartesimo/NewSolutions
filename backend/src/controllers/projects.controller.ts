import type { Request, Response } from "express";
import { getAllProjects, findProjectBySlug, } from "../services/projects.service.js";

export async function getProjects(_req: Request, res: Response) {
  try {
    const projects = await getAllProjects();

    return res.json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);

    return res.status(500).json({
      message: "Unable to fetch projects.",
    });
  }
}

export async function getProjectBySlugController(
  req: Request<{ slug: string }>,
  res: Response,
) {
  try {
    const project = await findProjectBySlug(req.params.slug);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.json(project);
  } catch (error) {
    console.error("Failed to fetch project:", error);

    return res.status(500).json({
      message: "Unable to fetch project.",
    });
  }
}
