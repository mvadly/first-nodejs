const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dataJson = "../../data.json";
const VisitorController = {
  // Menampilkan data
  getAll: (req, res) => {
    fs.readFile(dataJson, "utf8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  },

  // Menambahkan data
  create: (req, res) => {
    fs.readFile(dataJson, "utf8", (err, data) => {
      if (err) throw err;
      const obj = JSON.parse(data);
      obj.push(req.body);
      fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
        if (err) throw err;
        res.json({ message: "Data berhasil ditambahkan" });
      });
    });
  },

  // Mengubah data
  update: (req, res) => {
    fs.readFile(dataJson, "utf8", (err, data) => {
      if (err) throw err;
      const obj = JSON.parse(data);
      const index = obj.findIndex((item) => item.id == req.params.id);
      if (index !== -1) {
        obj[index] = req.body;
        fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
          if (err) throw err;
          res.json({ message: "Data berhasil diubah" });
        });
      } else {
        res.status(404).json({ message: "Data tidak ditemukan" });
      }
    });
  },

  // Menghapus data
  delete: (req, res) => {
    fs.readFile(dataJson, "utf8", (err, data) => {
      if (err) throw err;
      const obj = JSON.parse(data);
      const index = obj.findIndex((item) => item.id == req.params.id);
      if (index !== -1) {
        obj.splice(index, 1);
        fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
          if (err) throw err;
          res.json({ message: "Data berhasil dihapus" });
        });
      } else {
        res.status(404).json({ message: "Data tidak ditemukan" });
      }
    });
  },
};

module.exports = VisitorController;
