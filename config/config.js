const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports.PORT = process.env.PORT || 8080;
module.exports.DB_HOST = process.env.DB_HOST;
module.exports.DB_USER = process.env.DB_USER;
module.exports.DB_PASSWORD = process.env.DB_PASSWORD;
module.exports.DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;
