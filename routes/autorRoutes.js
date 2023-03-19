import express from "express";
import {
createAutor,
getAutores,
getAutorById,
updateAutorById,
deleteAutorById,
} from "../controllers/autorController.js";

// Creamos un router de express
const router = express.Router();

// Rutas para la creación, obtención, actualización y eliminación de autores
router.post("/", createAutor);
router.get("/", getAutores);
router.get("/:id", getAutorById);
router.put("/:id", updateAutorById);
router.delete("/:id", deleteAutorById);

export default router;


