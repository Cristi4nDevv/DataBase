import { Router } from "express";

import {
  crearAutor,
  listarAutores,
  obtenerAutor
} from "../controllers/autores.controller.js";

const router = Router();

// Crear un autor
router.post("/", crearAutor);

// Consultar todos los autores
router.get("/", listarAutores);

// Consultar un autor por ID
router.get("/:id", obtenerAutor);

export default router;