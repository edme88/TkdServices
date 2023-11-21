const dojanModel = require("../models/dojan");

class DojanService {
  constructor() {}

  getAll() {
    return dojanModel.getAll();
  }

  getFiltered(key, val) {
    return dojanModel.getFiltered(key, val);
  }

  addDojan(dojan) {
    //agregar lógica para validar la info de los campos
    return dojanModel.addDojan(dojan);
  }

  updateDojan(dni, dataToUpdate) {
    return dojanModel.updateDojan(dni, dataToUpdate);
  }
}

module.exports = new DojanService();
