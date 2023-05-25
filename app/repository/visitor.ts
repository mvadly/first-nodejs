const vModel = require("../model/visitor");
import { Response } from "express";
import { ResponseService, responseService } from "../model/model";
export const getAllVisitor = async (data: any, res: Response): Promise<ResponseService> => {
  try {
    const visitor = await vModel.find()
      .skip(parseInt(data.query.start))
      .limit(parseInt(data.query.limit))
      .sort({ createdAt: -1 })
    return responseService(200, "OK", {
      list: visitor,
      filtered: visitor.length,
      total: await vModel.estimatedDocumentCount(),
    })
  } catch (err: any) {
    return responseService(500, "Internal server error: " + err.message)
  }
};

export const createVisitor = async (data: any, res: Response): Promise<ResponseService> => {
  try {
    const vSave = new vModel(data);
    const insert = await vSave.save()
    return responseService(201, "OK", insert)
  } catch (err: any) {
    return responseService(500, "Internal server error: " + err.message, null)
  }
};