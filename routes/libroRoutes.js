import express from "express";
import {
  createLibro,
  getLibros,
  getLibroById,
  updateLibroById,
  deleteLibroById,
  getLibrosye,
  getLibrosbyGenero,
  getLibrosBySerie,
  getNewestLibros,
} from "../controllers/libroController.js";

const router = express.Router();
router.post("/", createLibro);
router.get("/", getLibros);
router.get("/:id", getLibroById);
router.put("/:id", updateLibroById);
router.delete("/:id", deleteLibroById);
router.get("/masnuevos", getLibrosye);
router.post("/newest", getNewestLibros);
router.get("/genero/:idGenero", getLibrosbyGenero);
router.get("/serie/:idSerie", getLibrosBySerie);

export default router;
