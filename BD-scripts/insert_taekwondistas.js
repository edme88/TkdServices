const knex = require("../config/database");
const taekwondistasData = require("../data/taekwondistas.json");

knex("taekwondistas")
  .insert(taekwondistasData)
  .then(() => {
    console.log("taekwondistas agregados a la tabla");
  })
  .catch((error) => {
    console.log("error:", error);
  })
  .finally(() => {
    console.log("cerrando conexion...");
    knex.destroy();
  });
