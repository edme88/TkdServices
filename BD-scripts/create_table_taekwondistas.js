const knex = require("../config/database");

knex.schema
  .createTable("taekwondistas", (table) => {
    table.increments("id").primary();
    table.string("nombre", 40);
    table.string("apellido", 40);
    table.integer("dni", 10);
    table.datetime("fecha_nacimiento", { precision: 6 });
    table.string("direccion", 120);
    table.string("categoria", 100);
    table.string("instructor_a_cargo", 100);
    table.decimal("peso", 2);
    table.decimal("altura", 2);
    table.string("genero", 40);
    table.string("nacionalidad", 40);
    table.integer("celular", 20);
    table.string("email", 120);
    table.string("nombre_contacto", 40);
    table.string("apellido_contacto", 40);
    table.string("vinculo_contacto", 40);
    table.integer("celular_contacto", 20);
    table.datetime("creationDate");
  })
  .then(() => {
    console.log("tabla taekwondistas creada!");
  })
  .catch((error) => {
    console.log("error:", error);
    throw error;
  })
  .finally(() => {
    console.log("cerrando conexion...");
    knex.destroy();
  });
