import express from "express";
import { createSerie, getSeries, getSerieById, updateSerieById, deleteSerieById } from "../controllers/serieController.js";

const router = express.Router();

router.post("/", createSerie);
router.get("/", getSeries);
router.get("/:id", getSerieById);
router.put("/:id", updateSerieById);
router.delete("/:id", deleteSerieById);

export default router;
