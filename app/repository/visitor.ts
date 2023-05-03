const mdb = require("../../config/database");
import { Response } from "express";

const getAllVisitor = async (data: any, res: Response) => {
  mdb().then((mdb: any) => {
    mdb.db
      .collection("visitor")
      .find(data.filter)
      .skip(parseInt(data.query.start))
      .limit(parseInt(data.query.limit))
      .sort({ createdAt: -1 })
      .toArray(async (err: Error, docs: any) => {
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
            total: await mdb.db.collection("visitor").estimatedDocumentCount(),
          },
        });
      });
  });
};

const createVisitor = async (data: any, res: any) => {
  await mdb().then((mdb: any) => {
    mdb.db.collection("visitor").insertOne(data, (err: Error) => {
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
