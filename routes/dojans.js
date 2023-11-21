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
  const dojanData = request.body;
  dojanService.addDojan(dojanData);
  response.json(`${JSON.stringify(dojanData)} creado OK`);
});

routes.put("/dojan/:id", (request, response) => {
  console.log(request);
  const dataToUpdate = request.body;
  const res = dojanService.updateDojan(request.params.id, dataToUpdate);

  response.json(res);
});

routes.delete("/dojan/:id", (request, response) => {
  try {
    const id = request.params.id;
    const res = dojanService.deleteDojan(id);
    response.json({
      message: `El dojan con el Nombre ${res.Nombre} ha sido eliminada`,
    });
  } catch (error) {
    console.log(error);
    response.status(404).json({ error: error.message });
  }
});

module.exports = routes;
