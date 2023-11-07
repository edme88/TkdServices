const tkdModel = require("../models/taekwondista");

class TaekwondistaService {
  constructor() {}

  getAll() {
    return tkdModel.getAll();
  }

  getFiltered(key, val) {
    return tkdModel.getFiltered(key, val);
  }
}

module.exports = new TaekwondistaService();
