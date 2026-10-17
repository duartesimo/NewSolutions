import type { Request, Response } from "express";
import { getAllProjects } from "../services/projects.service.js";
import { findProjectBySlug } from "../services/projects.service.js";

export function getProjects(_req: Request, res: Response) {
  const projects = getAllProjects();

  res.json(projects);
}

export function getProjectBySlugController(
  req: Request<{ slug: string }>,
  res: Response,
) {
  const project = findProjectBySlug(req.params.slug);

  if (!project) {
    res.status(404).json({
      message: "Project not found",
    });
    return;
  }

  res.json(project);
}
