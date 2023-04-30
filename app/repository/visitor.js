const jsonDB = require("../helper/jsonDb");
const path = require("path");
const dataJson = path.join("", "./data.json");

const getAllVisitor = (res) => {
  jsonDB.findAll(dataJson, res);
};
const createVisitor = (data, res) => {
  jsonDB.insert(data, dataJson, res);
};

const visitorRepository = {
  getAllVisitor,
  createVisitor,
};

module.exports = visitorRepository;
