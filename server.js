const express = require("express");
const taekwondistas = require("./routes/taekwondistas");
const swaggerUI = require("swagger-ui-express");
const taekwondistaDocument = require("./swagger/taekwondista.json");

const app = express();

require("dotenv").config();
const config = require("./config/config");
require("./config/database");

//Parsear la información-Configurar express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", taekwondistas);

taekwondistaDocument.host = `${config.HOST}:${config.PORT}`;
app.use("/docs", swaggerUI.serve, swaggerUI.setup(taekwondistaDocument));

const port = config.PORT;
const server = app.listen(port, () => {
  console.log(`Servidor escuchando: ${port}`);
});
