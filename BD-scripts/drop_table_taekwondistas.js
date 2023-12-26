const knex = require("../config/database");

knex.schema
  .dropTableIfExists("taekwondistas", (table) => {})
  .then(() => {
    console.log("tabla taekwondistas BORRADA MUAJAJA!");
  })
  .catch((error) => {
    console.log("error:", error);
    throw error;
  })
  .finally(() => {
    console.log("cerrando conexion...");
    knex.destroy();
  });
