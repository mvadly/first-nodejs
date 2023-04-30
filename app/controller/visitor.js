const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const validator = require("../helper/validation");
const app = express();
var options = {
  inflate: true,
  limit: '100kb',
  type: 'application/octet-stream'
};
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.raw(options));



const dataJson = path.join("", "./data.json");
const visitorController = {
  // Menampilkan data
  getAll: (req, res) => {
    fs.readFile(dataJson, "utf8", (err, data) => {
      if (err) {
        return res.json({
          status: false,
          message: err.message,
          data: null,
        });
      }
      res.json({
        status: true,
        message: "OK",
        data: data !== "" ? JSON.parse(data) : null,
      });
    });
  },

  create: (req, res) => {
    const validationRule = {
      name: "required|string|email",
      message: "required|string",
      lat: "float",
      lng: "float",
    };

    return res.json({"req": req.body});
    // validator(req.body, validationRule, {}, (err, status) => {
    //   if (!status) {
    //     return res.status(412).send({
    //       success: false,
    //       message: "Validation failed",
    //       data: err,
    //     });
    //   }
    // }).catch((err) => console.log(err));

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

module.exports = visitorController;
