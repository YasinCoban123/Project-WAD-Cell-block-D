import express from "express";
import type { Request, Response } from 'express';

const router = express.Router();

router.get("", (req: Request, res: Response) => {
 res.status(200).send("Absolute ...");
});

router.get("/Ibba", (req: Request, res: Response) => {
 res.send("<h1>Absolute Ibba</h1>");
});

export default router;