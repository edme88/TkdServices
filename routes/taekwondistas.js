const express = require("express");
const routes = express.Router();
const fs = require("fs");
const tkdService = require("../services/taekwondistas");
//const chalk = require("chalk");
//import chalk from "chalk";
//const log = console.log;

routes.get("/taekwondistas", async (request, response) => {
  try {
    let data;
    if (Object.keys(request.query).length === 0) {
      data = await tkdService.getAll();
      console.log(`La DATA es ${JSON.stringify(data)}}]`);
    } else {
      const el = Object.keys(request.query);
      const key = el[0];
      const val = Object.values(request.query)[0];
      console.log(key, val);
      data = tkdService.getFiltered(key, val);
    }
    response.json(data);
  } catch (error) {
    response.status(500).json({ message: error });
  }
});

routes.post("/taekwondista", (request, response) => {
  try {
    const tkdData = request.body;
    console.log(`La info es: ${JSON.stringify(tkdData)}`);
    tkdService.addTaek(tkdData);
    response.json(`${JSON.stringify(tkdData)} creado OK`);
  } catch (error) {
    console.log(`Ocurrio un error ${error}`);
    response.status(400).send(`Algo salio mal`);
  }
});

routes.post("/test", (request, response) => {
  console.log(`La respuesta es: ${JSON.stringify(request.body)}`);
  response.json(request.body);
});

routes.put("/taekwondista/:dni", (request, response) => {
  console.log(request);
  const dataToUpdate = request.body;
  const res = tkdService.updateTkd(request.params.dni, dataToUpdate);

  response.json(res);
});

routes.delete("/taekwondista/:dni", (request, response) => {
  const dni = request.params.dni;
  const res = tkdService.deleteTkd(request.params.dni);
  response.json({ message: `Persona con DNI ${dni} ha sido eliminada` });
});

module.exports = routes;
