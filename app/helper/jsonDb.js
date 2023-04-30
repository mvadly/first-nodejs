const fs = require("fs");
const checkCreateDb = (request, pathJson, err, res) => {
  if (err.length > 0) {
    console.log("masuk create db");
    if (err.includes("ENOENT: no such file or directory")) {
      console.log("masuk create db 2");
      fs.writeFile(pathJson, JSON.stringify([request]), (errCreate) => {
        console.log("masuk create db 3");
        if (errCreate) {
          console.log("masuk create db 4");
          return res.status(500).json({
            success: false,
            message:
              "Internal server error: " +
              errCreate.message +
              " when create new json file",
          });
        }
      });
    }
    
    console.log("masuk create db 5");
    return res.status(500).json({
      success: false,
      message: "Internal server error: " + err,
    });
  }

  return res.status(200).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data: request,
  });
};
const findAll = (pathJson, res) => {
  fs.readFile(pathJson, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error: " + err.message,
      });
    }

    return res.json({
      status: true,
      message: "OK",
      data: data !== "" ? JSON.parse(data) : null,
    });
  });
};

const insert = (req, pathJson, res) => {
  fs.readFile(pathJson, "utf8", (err, data) => {
    if (err) {
      checkCreateDb(req, pathJson, err.message, res);
    }

    const obj = data !== "" ? JSON.parse(data) : [];
    const body = req;
    obj.push(body);
    fs.writeFile(pathJson, JSON.stringify(obj), (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Internal server error: " + err.message,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Data berhasil ditambahkan",
        data: body,
      });
    });
  });
};

const jsonDB = {
  findAll,
  insert,
};

module.exports = jsonDB;
