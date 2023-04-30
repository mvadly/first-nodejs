const mdb = require("../../config/database");
const path = require("path");
const dataJson = path.join("", "./data.json");

const getAllVisitor = (res) => {
  mdb().then((db) => {
    db.collection("visitor")
      .find()
      .toArray((err, docs) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Internal server error: " + err.message,
          });
        }
        return res.status(200).json({
          success: true,
          message: "OK",
          data: docs,
        });
      });
  })
};
const createVisitor = (data, res) => {
  mdb().then((db) => {
    db.collection("visitor").insertOne(data, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Internal server error: " + err.message,
        });
      }

      return res.status(200).json({
        success: true,
        message: "OK",
        data: data,
      });
    });
  });
};

const visitorRepository = {
  getAllVisitor,
  createVisitor,
};

module.exports = visitorRepository;