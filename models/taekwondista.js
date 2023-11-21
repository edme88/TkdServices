const fs = require("fs");
const path = require("path");
const utils = require("../utils/common");

class TaekwondistaModel {
  constructor() {
    const filePath = path.join(__dirname, "../data/taekwondistas.json");
    this.data = fs.readFileSync(filePath, "utf-8");
  }

  /**
   * GET Devuelve el listado de TODOS los taekwondistas
   * @method getAll
   * @return {Array} Listado de taekwondistas
   */
  getAll() {
    return JSON.parse(this.data);
  }

  /**
   * GET Devuelve el listado de TODOS los taekwondistas que conciden con el filtro de búsqueda
   * @method getFiltered
   * @param {String} filterName - Nombre del valor por el cual se desea filtrar: Nombre, Apellido, Dni, Categoría, Fecha de Nacimiento
   * Instructor, Peso, Altura, Genero, Nacionalidad, Celular, Email": "edmealiciardi@gmail.com"
   * @return {Array} Listado de taekwondistas que coincidan con la busqueda
   */
  getFiltered(filterName, filterValue) {
    const data = JSON.parse(this.getAll());
    const results = data.filter((el) => el[filterName] === filterValue);

    if (results === undefined) {
      const error = {
        message: `No se encuentra el taekwondista con el ${filterName}=${filterValue}`,
      };
      return error;
    }
    console.log(`Resultado: ${JSON.stringify(results)}`);
    console.log(`Nombre del filtro: ${filterName}`);
    console.log(`Valor del filtro: ${filterValue}`);
    return results;
  }

  addTaek(taekwondista) {
    taekwondista.creationDate = new Date().toLocaleDateString();
    utils.saveDataInFile("taekwondistas", taekwondista);
    return taekwondista;
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
