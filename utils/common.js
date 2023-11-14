const path = require("path");
const fs = require("fs");
const checkOnlyText = (variable) => /^[A-Za-z]+$/.test(variable);

const checkPeso = (variable) => variable > 20 && variable < 200;

const checkTextNumber = (variable) => {
  const pattern = /^[A-Za-z0-9]+$/i; // Usar directamente la expresión regular
  return pattern.test(variable);
};

const saveDataInFile = (fileName, data) => {
  const filePath = path.join(__dirname, `../data/${fileName}.json`);
  const readData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(readData);
  jsonData.push(data);
  fs.writeFileSync(filePath, JSON.stringify(jsonData));
};

const deleteDataInFile = (fileName, param, value) => {
  const filePath = path.join(__dirname, `../data/${fileName}.json`);
  const readData = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(readData);
  const newJsonData = jsonData.filter((el) => el[param] !== value);
  fs.writeFileSync(filePath, JSON.stringify(newJsonData));
};

module.exports.saveDataInFile = saveDataInFile;
module.exports.deleteDataInFile = deleteDataInFile;
