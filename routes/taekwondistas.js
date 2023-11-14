const express = require("express");
const routes = express.Router();
const fs = require("fs");
const tkdService = require("../services/taekwondistas");
//const chalk = require("chalk");
//import chalk from "chalk";
//const log = console.log;

routes.get("/taekwondistas", (request, response) => {
  // Obtener los datos obligatorios de la consulta
  /*const requiredFields = [
    "nombre",
    "apellido",
    "dni",
    "fechaNacimiento",
    "direccion",
    "categoria",
    "instructor",
    "peso",
    "altura",
    "genero",
    "nacionalidad",
    "celular",
    "email",
    "contactoEmergencia.nombre",
    "contactoEmergencia.apellido",
    "contactoEmergencia.vinculo",
    "contactoEmergencia.celular",
  ];

  //console.log(chalk.blue("Hello world!"));
  const missingFields = [];

  const query = request.query;
  // Verificar qué campos obligatorios faltan
  requiredFields.forEach((field, $inx) => {
    if (!query[field]) {
      missingFields.push(field);
      console.log(`It ${$inx} - El valor ${field} no esta incluido`);
    } else {
      console.log(`It ${$inx} - El valor ${field} SI esta incluido`);
    }
  });

  // Comprobar si faltan campos
  if (missingFields.length > 0) {
    return response
      .status(400)
      .json({ error: "Faltan datos obligatorios", missingFields });
  }

  console.log(request);
  response.json(query);*/

  let data;
  if (Object.keys(request.query).length === 0) {
    data = tkdService.getAll();
  } else {
    /*const numFiltro = Object.keys(request.query).length;
    for(let i=0; i<=numFiltro; i++){

    }*/
    const el = Object.keys(request.query);
    const key = el[0];
    const val = Object.values(request.query)[0];
    console.log(key, val);
    data = tkdService.getFiltered(key, val);
  }

  response.json(data);
});

routes.post("/taekwondista", (request, response) => {
  /*
  // Obtener los datos obligatorios de la consulta
  const requiredFields = [
    "nombre",
    "apellido",
    "dni",
    "fechaNacimiento",
    "direccion",
    "categoria",
    "instructor",
    "peso",
    "altura",
    "genero",
    "nacionalidad",
    "celular",
    "email",
    "contactoEmergencia.nombre",
    "contactoEmergencia.apellido",
    "contactoEmergencia.vinculo",
    "contactoEmergencia.celular",
  ];

  //console.log(chalk.blue("Hello world!"));
  const missingFields = [];

  const query = request.query;
  // Verificar qué campos obligatorios faltan
  requiredFields.forEach((field, $inx) => {
    if (!query[field]) {
      missingFields.push(field);
      console.log(`It ${$inx} - El valor ${field} no esta incluido`);
    } else {
      console.log(`It ${$inx} - El valor ${field} SI esta incluido`);
    }
  });

  // Comprobar si faltan campos
  if (missingFields.length > 0) {
    return response
      .status(400)
      .json({ error: "Faltan datos obligatorios", missingFields });
  }

  console.log(request);
  fs.writeFileSync("persona.json", request);
  response.json(query);*/
  const tkdData = request.body;
  tkdService.addTaek(tkdData);
  response.json(`${JSON.stringify(tkdData)} creado OK`);
});

routes.put("/taekwondista/:dni", (request, response) => {
  console.log(request);
  const dataToUpdate = request.body;
  const res = tkdService.updateTkd(request.params.dni, dataToUpdate);

  response.json(res);
});

routes.delete("/taekwondista", (request, response) => {
  const dni = request.params.dni;
  response.json({ message: `Persona con DNI ${dni} ha sido eliminada` });
});

module.exports = routes;
