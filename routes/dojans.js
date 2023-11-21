const express = require("express");
const routes = express.Router();
const fs = require("fs");
const dojanService = require("../services/dojans");

routes.get("/dojans", (request, response) => {

  let data;
  if (Object.keys(request.query).length === 0) {
    data = dojanService.getAll();
  } else {
    const el = Object.keys(request.query);
    const key = el[0];
    const val = Object.values(request.query)[0];
    console.log(key, val);
    data = dojanService.getFiltered(key, val);
  }

  response.json(data);
});

routes.post("/dojan", (request, response) => {
  const tkdData = request.body;
  dojanService.addTaek(tkdData);
  response.json(`${JSON.stringify(tkdData)} creado OK`);
});

routes.put("/dojan/:dni", (request, response) => {
  console.log(request);
  const dataToUpdate = request.body;
  const res = dojanService.updateTkd(request.params.dni, dataToUpdate);

  response.json(res);
});

routes.delete("/dojan", (request, response) => {
  const dni = request.params.dni;
  response.json({ message: `Persona con DNI ${dni} ha sido eliminada` });
});

module.exports = routes;
