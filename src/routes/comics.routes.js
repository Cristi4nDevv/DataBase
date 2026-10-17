import { Router } from "express";

import {
  crearComic,
  listarComics,
  obtenerComic
} from "../controllers/comics.controller.js";

const router = Router();

// Crear un cómic
router.post("/", crearComic);

// Consultar todos los cómics
router.get("/", listarComics);

// Consultar un cómic por ID
router.get("/:id", obtenerComic);

export default router;