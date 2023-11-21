const tkdModel = require("../models/taekwondista");

class TaekwondistaService {
  constructor() {}

  getAll() {
    return tkdModel.getAll();
  }

  getFiltered(key, val) {
    return tkdModel.getFiltered(key, val);
  }

  addTaek(taekwondista) {
    //agregar lógica para validar la info de los campos
    return tkdModel.addTaek(taekwondista);
  }

  updateTkd(dni, dataToUpdate) {
    return tkdModel.updateTkd(dni, dataToUpdate);
  }

  deleteTkd(dni) {
    return tkdModel.deleteTkd(dni);
  }
}

module.exports = new TaekwondistaService();
