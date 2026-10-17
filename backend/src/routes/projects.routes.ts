import { Router } from "express";
import { getProjects, getProjectBySlugController, } from "../controllers/projects.controller.js";

const router = Router();

router.get("/", getProjects);
router.get("/:slug", getProjectBySlugController);

export default router;
