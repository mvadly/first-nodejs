const vModel = require("../model/visitor");
import { Response } from "express";
import { STATUS_CODES } from "http";
const getAllVisitor = async (data: any, res: Response) => {
  try {
    const visitor = await vModel.find()
      .skip(parseInt(data.query.start))
      .limit(parseInt(data.query.limit))
      .sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      message: "OK",
      data: {
        list: visitor,
        filtered: visitor.length,
        total: await vModel.estimatedDocumentCount(),
      },
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: "Internal server error: " + err.message,
    });

  }
};

const createVisitor = async (data: any, res: Response) => {
  try {
    const vSave = new vModel(data);
    const insert = await vSave.save()
    return res.status(201).json({
      success: true,
      message: "OK",
      data: insert,
    })
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: "Internal server error: " + err.message,
    });
  }

};

const visitorRepository = {
  getAllVisitor,
  createVisitor,
};

module.exports = visitorRepository;
