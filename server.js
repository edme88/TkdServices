const express = require("express");
const usuarios = require("./routes/usuarios");
const mensajes = require("./routes/mensajes");
const taekwondistas = require("./routes/taekwondistas");
const dojans = require("./routes/dojans");

const app = express();
const routes = express.Router();

//Parsear la información-Configurar express
routes.use(express.json());

routes.get("/", (request, response) => {
  console.log(request);
  response.json({ nombre: "Agus" });
});

app.use(routes);
app.use("/api", usuarios);
app.use("/api", taekwondistas);
app.use("/api", dojans);
app.use(mensajes);

const port = 8080;
const server = app.listen(port, () => {
  console.log(`Servidor escuchando: ${port}`);
});
