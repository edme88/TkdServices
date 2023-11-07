const express = require("express");
const routes = express.Router();

//Si son muchos datos o no son mandatorios
routes.get("/mensajes", (request, response) => {
  const txt = "Hola Mundo!";
  console.log(request);
  response.send(txt);
});

module.exports = routes;
