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
    const data = await this.all();
    console.log(`LA DATA2 es ${JSON.stringify(data)}`);
    const results = data.filter((el) => el[filterName] == filterValue);

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

  async createData(data) {
    try {
      data.creationDate = new Date().toLocaleDateString();
      console.log(data);
      const result = await dataBase(this.tableName).insert([data]);
      console.log(`El RESULT es: ${result}`);
      return result;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }
}

module.exports = DAO;
