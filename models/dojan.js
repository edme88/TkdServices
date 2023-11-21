const fs = require("fs");
const path = require("path");
const utils = require("../utils/common");

class DojanModel {
  constructor() {
    const filePath = path.join(__dirname, "../data/dojan.json");
    this.data = fs.readFileSync(filePath, "utf-8");
  }

  /**
   * GET Devuelve el listado de TODOS los dojans
   * @method getAll
   * @return {Array} Listado de Dojans
   */
  getAll() {
    return this.data;
  }

  /**
   * GET Devuelve el listado de TODOS los Dojans que conciden con el filtro de búsqueda
   * @method getFiltered
   * @param {String} filterName - Nombre del valor por el cual se desea filtrar: Nombre, Dirección, Sabon a cargo
   * @return {Array} Listado de Dojans que coincidan con la busqueda
   */
  getFiltered(filterName, filterValue) {
    const data = JSON.parse(this.getAll());
    const results = data.filter((el) => el[filterName] === filterValue);

    if (results === undefined) {
      const error = {
        message: `No se encuentra ningun Dojan con el ${filterName}=${filterValue}`,
      };
      return error;
    }
    console.log(`Resultado: ${JSON.stringify(results)}`);
    console.log(`Nombre del filtro: ${filterName}`);
    console.log(`Valor del filtro: ${filterValue}`);
    return results;
  }

  addDojan(dojan) {
    dojan.creationDate = new Date().toLocaleDateString();
    utils.saveDataInFile("dojans", dojan);
    return dojan;
  }

  /*
  updateDojan(dni, dataToUpdate) {
    console.log(dni, dataToUpdate);
    let results = JSON.parse(this.data).find((el) => el["Dni"] === dni);
    console.log(results);
    dataToUpdate.updateDate = new Date().toLocaleDateString();
    results = { ...results, ...dataToUpdate };
    utils.deleteDataInFile("taekwondistas", "Dni", dni);
    utils.saveDataInFile("taekwondistas", results);
    return results;
  }*/
}

module.exports = new DojanModel();