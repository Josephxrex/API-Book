import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";


import autorRoutes from "./routes/autorRoutes.js";
import generoRoutes from "./routes/generoRoutes.js";
import serieRoutes from "./routes/seriesRoutes.js";
import libroRoutes from "./routes/libroRoutes.js";


const app = express();
app.use(express.json());
dotenv.config();

conectarDB();


// Habilitar CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","http://localhost:5173"); // Permitir solicitudes desde el origen especificado
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//=====Routing=====//

//Autor
app.use("/api/autor",autorRoutes );
//Serie
app.use("/api/serie", serieRoutes);
//Genero
app.use("/api/genero",generoRoutes);
//Libro
app.use("/api/libro", libroRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
