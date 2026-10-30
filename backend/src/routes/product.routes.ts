import express from "express";
import type { Request, Response } from 'express';

import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();


router.get("/add-products", (req: Request, res: Response) => {
 res.sendFile(path.join(__dirname, "..", "views", "add-product.html"))
});

router.get("/products", (req: Request, res: Response) => {
 res.sendFile(path.join(__dirname, "..", "views", "products.html"))
});

export default router;