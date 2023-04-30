const fs = require("fs");
const checkCreateDb = (request, pathJson, err, res) => {
  if (err.length > 0) {
    if (err.includes("ENOENT: no such file or directory")) {
      fs.writeFile(pathJson, JSON.stringify([request]), (errCreate) => {
        if (errCreate) {
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
