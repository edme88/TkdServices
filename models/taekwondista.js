const fs = require("fs");
const path = require("path");

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
    return this.data;
  }

  /**
   * GET Devuelve el listado de TODOS los taekwondistas que conciden con el filtro de búsqueda
   * @method getAll
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
}

module.exports = new TaekwondistaModel();
