import * as svc from "../service/visitor"
import { Request, Response } from "express";
export const visitorController = {
  getAll: async (req: Request, res: Response) => {
    const result = await svc.getAllVisitor(req, res);
    res.status(result.statusCode).json(result.data)
  },

  create: async (req: Request, res: Response) => {
    const result = await svc.createVisitor(req, res);
    res.status(result.statusCode).json(result.data)
  },
};

