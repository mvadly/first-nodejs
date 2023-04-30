const express = require("express");
const fs = require("fs");
const validator = require("../helper/validation");
const visitorRepository = require("../repository/visitor");
const visitorService = require("../services/visitor");
const util = require("../helper/util");
var options = {
  inflate: true,
  limit: "100kb",
  type: "application/octet-stream",
};

// app.use(bodyParser.raw(options));

const visitorController = {
  // Menampilkan data
  getAll: (req, res) => {
    visitorService.getAllVisitor(res);
  },

  create: (req, res) => {
    visitorService.createVisitor(req, res);
  },

  // // Mengubah data
  // update: (req, res) => {
  //   fs.readFile(dataJson, "utf8", (err, data) => {
  //     if (err) throw err;
  //     const obj = JSON.parse(data);
  //     const index = obj.findIndex((item) => item.id == req.params.id);
  //     if (index !== -1) {
  //       obj[index] = req.body;
  //       fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
  //         if (err) throw err;
  //         res.json({ message: "Data berhasil diubah" });
  //       });
  //     } else {
  //       res.status(404).json({ message: "Data tidak ditemukan" });
  //     }
  //   });
  // },

  // // Menghapus data
  // delete: (req, res) => {
  //   fs.readFile(dataJson, "utf8", (err, data) => {
  //     if (err) throw err;
  //     const obj = JSON.parse(data);
  //     const index = obj.findIndex((item) => item.id == req.params.id);
  //     if (index !== -1) {
  //       obj.splice(index, 1);
  //       fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
  //         if (err) throw err;
  //         res.json({ message: "Data berhasil dihapus" });
  //       });
  //     } else {
  //       res.status(404).json({ message: "Data tidak ditemukan" });
  //     }
  //   });
  // },
};

module.exports = visitorController;
