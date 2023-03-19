import express from "express";
import {
  createGenero,
  getGeneros,
  getGeneroById,
  updateGeneroById,
  deleteGeneroById,
} from "../controllers/generoController.js";

const router = express.Router();

router.post("/", createGenero);
router.get("/", getGeneros);
router.get("/:id", getGeneroById);
router.put("/:id", updateGeneroById);
router.delete("/:id", deleteGeneroById);

export default router;
