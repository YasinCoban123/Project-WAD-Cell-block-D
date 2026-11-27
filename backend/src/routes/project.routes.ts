import { Router } from "express";
import type { Request, Response } from "express";
import { AppDataSource } from "../data-source.js";
import { Project } from "../models/project.js";

const router = Router();

router.get("/api/projects", async (req: Request, res: Response) => {
  const projects = await AppDataSource.getRepository(Project).find();
  res.json(projects);
});

router.post("/api/projects", async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Project);
  const saved = await repo.save(repo.create(req.body));
  res.status(201).json(saved);
});

export default router;