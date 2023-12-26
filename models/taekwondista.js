const fs = require("fs");
const path = require("path");
const utils = require("../utils/common");
const dataBase = require("../config/database");
const { response } = require("express");
const DAO = require("../models/crud.repository");

class TaekwondistaModel extends DAO {
  constructor() {
    super("taekwondistas");
  }

  /**
   * GET Devuelve el listado de TODOS los taekwondistas
   * @method getAll
   * @return {Array} Listado de taekwondistas
   */
  async getAll() {
    return this.all();
  }

  /**
   * GET Devuelve el listado de TODOS los taekwondistas que conciden con el filtro de búsqueda
   * @method getFiltered
   * @param {String} filterName - Nombre del valor por el cual se desea filtrar: Nombre, Apellido, Dni, Categoría, Fecha de Nacimiento
   * Instructor, Peso, Altura, Genero, Nacionalidad, Celular, Email": "edmealiciardi@gmail.com"
   * @return {Array} Listado de taekwondistas que coincidan con la busqueda
   */
  getFiltered(filterName, filterValue) {
    return this.filterBy(filterName, filterValue);
  }

  addTaek(taekwondista) {
    /*taekwondista.creationDate = new Date().toLocaleDateString();
    console.log(taekwondista);
    dataBase("taekwondistas")
      .insert([taekwondista])
      .then(() => {
        console.log("taekwondistas agregados a la tabla");
      })
      .catch((error) => {
        console.log("error:", error);
      })
      .finally(() => {
        console.log("cerrando conexion de taekwondistas...");
        //dataBase.destroy();
      });
    return taekwondista;*/
    return this.createData(taekwondista);
  }

  updateTkd(dni, dataToUpdate) {
    console.log(dni, dataToUpdate);
    let results = JSON.parse(this.data).find((el) => el["Dni"] === dni);
    console.log(results);
    dataToUpdate.updateDate = new Date().toLocaleDateString();
    results = { ...results, ...dataToUpdate };
    utils.deleteDataInFile("taekwondistas", "Dni", dni);
    utils.saveDataInFile("taekwondistas", results);
    return results;
  }

  deleteTkd(dni) {
    utils.deleteDataInFile("taekwondistas", "Dni", dni);
  }
}

module.exports = new TaekwondistaModel();
