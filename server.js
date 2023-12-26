const express = require("express");
const taekwondistas = require("./routes/taekwondistas");

const app = express();

require("dotenv").config();
const config = require("./config/config");
require("./config/database");

//Parsear la información-Configurar express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", taekwondistas);

const port = config.PORT;
const server = app.listen(port, () => {
  console.log(`Servidor escuchando: ${port}`);
});
