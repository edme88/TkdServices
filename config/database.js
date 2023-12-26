const config = require("./config");
const options = {
  client: "mysql",
  connection: {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE_NAME,
  },
  pool: { min: 0, max: 7 },
};

const knex = require("knex")(options);
knex
  .raw("show databases")
  .then(() => {
    console.log("Se conecto!!!");
  })
  .catch((error) => {
    console.log(`Ocurrio un error :'( ${error}`);
  });

module.exports = knex;
