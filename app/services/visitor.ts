const util = require("../helper/util");
const Validator = require("validatorjs");
import { Request, Response } from "express";
import * as repo from "../repository/visitor"
import { ResponseService, responseService } from "../model/model";

export const getAllVisitor = async (req: Request, res: Response): Promise<ResponseService> => {
  const filter: Object = {
    name: { $regex: req?.query?.search ?? "", $options: "i" },
  };

  const data: Object = {
    filter: filter,
    query: {
      start: req?.query?.start ?? 0,
      limit: req?.query?.limit ?? 10,
    },
  };

  return await repo.getAllVisitor(data, res)
};

export const createVisitor = async (req: Request, res: Response): Promise<ResponseService | any> => {
  const validationRule = {
    name: "required|string",
    message: "required|string",
    lat: "string",
    lng: "string",
  };

  const validation = new Validator(req.body, validationRule);

  if (validation.fails()) {
    return responseService(400, "Validation failed", validation.errors.all());
  }

  const request = {
    name: req.body.name,
    lat: req.body?.lat ?? null,
    lng: req.body?.lng ?? null,
    message: req.body.message,
    from: req.body?.from ?? [],
    createdAt: util.getDateTime(),
    ip: req?.socket?.remoteAddress ?? null
  };

  return await repo.createVisitor(request, res);
}
