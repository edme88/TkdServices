const express = require("express");
const routes = express.Router();

const autorizar = (request, response, next) => {
  console.log(`Te dejo pasar`);
  if (request.query.token === "123") {
    next();
  } else {
    response.status(400).send("Usuario no autorizado");
  }
};

//Si son muchos datos o no son mandatorios
routes.get("/usuario", autorizar, (request, response) => {
  const query = request.query;
  console.log(request);
  response.json({ nombre: "Agus", query: query });
});

//Max 2 datos, y si son mandatorios
routes.get("/usuario/:nombre/:apellido", (request, response) => {
  const name = request.params.nombre;
  const surname = request.params.apellido;
  console.log(request);
  response.json({ nombre: "Agus", query: { name, surname } });
});

routes.post("/usuario", (request, response) => {
  const bodyUser = request.body;
  console.log(request);
  response.json({ nombre: "Agus", body: bodyUser });
});

routes.put("/usuario", (request, response) => {
  const bodyUser = request.body;
  console.log(request);
  response.json({ nombre: "Agus", body: bodyUser });
});

routes.delete("/usuario", (request, response) => {
  const bodyUser = request.body;
  console.log(request);
  response.json({ nombre: "Agus", body: bodyUser });
});

module.exports = routes;
