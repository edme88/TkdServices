const fs = require("fs");
const path = require("path");
const utils = require("../utils/common");
const dataBase = require("../config/database");
const { response } = require("express");

class DAO {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async all() {
    try {
      let data = await dataBase.select("*").from(this.tableName);
      return JSON.parse(JSON.stringify(data));
    } catch (error) {
      console.log(`El error es ${error}`);
      throw error;
    }
  }

  async filterBy(filterName, filterValue) {
    const data2 = await this.all();
    const data = JSON.parse(data2);
    const results = data.filter((el) => el[filterName] === filterValue);

    if (results === undefined) {
      const error = {
        message: `No se encuentra el registro con el ${filterName}=${filterValue}`,
      };
      return error;
    }
    console.log(`Resultado: ${JSON.stringify(results)}`);
    console.log(`Nombre del filtro: ${filterName}`);
    console.log(`Valor del filtro: ${filterValue}`);
    return results;
  }

  createData(data) {
    data.creationDate = new Date().toLocaleDateString();
    console.log(data);
    dataBase(this.tableName)
      .insert([data])
      .then(() => {
        console.log(`Datos agregados a la tabla ${this.tableName}`);
      })
      .catch((error) => {
        console.log("error:", error);
      });
    return data;
  }
}

module.exports = DAO;
