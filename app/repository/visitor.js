const mdb = require("../../config/database");
const getAllVisitor = async (data, res) => {
  await mdb().then((mdb) => {
    mdb.db
      .collection("visitor")
      .find(data.filter)
      .skip(parseInt(data.query.start))
      .limit(parseInt(data.query.limit))
      .sort({ createdAt: -1 })
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
  });
};

const createVisitor = async (data, res) => {
  await mdb().then((mdb) => {
    mdb.db.collection("visitor").insertOne(data, (err) => {
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
