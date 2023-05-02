const mdb = require("../../config/database");
const getAllVisitor = async (data, res) => {
  try {
    mdb().then((mdb) => {
      mdb.db
        .collection("visitor")
        .find(data.filter)
        .skip(parseInt(data.query.start))
        .limit(parseInt(data.query.limit))
        .sort({ createdAt: -1 })
        .toArray(async (err, docs) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: "Internal server error: " + err.message,
            });
          }
          return res.status(200).json({
            success: true,
            message: "OK",
            data: {
              list: docs,
              filtered: docs.length,
              total: await mdb.db
                .collection("visitor")
                .estimatedDocumentCount(),
            },
          });
        });
    });
  } finally {
    (await mdb()).client.close();
  }
};

const createVisitor = async (data, res) => {
  try {
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
  } finally {
    (await mdb()).client.close();
  }
};

const visitorRepository = {
  getAllVisitor,
  createVisitor,
};

module.exports = visitorRepository;
