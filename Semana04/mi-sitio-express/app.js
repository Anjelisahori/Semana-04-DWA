const express = require("express");
const app = express();
const path = require("path");

// Configurar el motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para procesar formularios (muy importante)
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, "public")));

// Importar rutas
const mainRoutes = require("./routes/mainRoutes");
const pokedexRoutes = require("./routes/pokedexRoutes");

// Usar rutas
app.use("/", mainRoutes);
app.use("/pokedex", pokedexRoutes);

// Middleware 404 - Página no encontrada
app.use((req, res, next) => {
  res.status(404).render("notFound", { url: req.originalUrl });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
