import "dotenv/config";
import express from "express";
import { conectarDB } from "./config/db.js";
import autoresRoutes from "./routes/autores.routes.js";
import comicsRoutes from "./routes/comics.routes.js";

// Crear aplicación Express
const app = express();

// Permitir recibir datos JSON
app.use(express.json());

// Ruta principal de prueba
app.get("/", (req, res) => {
  res.json({
    mensaje: "API de la Tienda de Cómics funcionando"
  });
});

// Rutas de nuestra API
app.use("/api/autores", autoresRoutes);
app.use("/api/comics", comicsRoutes);

// Manejar rutas inexistentes
app.use((req, res) => {
  res.status(404).json({
    mensaje: "Ruta no encontrada"
  });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB e iniciar servidor
conectarDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
});