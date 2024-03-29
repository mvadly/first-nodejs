import * as svc from "../service/visitor"
import { Request, Response } from "express";
export const visitorController = {
  getAll: async (req: Request, res: Response): Promise<void> => {
    const result = await svc.getAllVisitor(req);
    res.status(result.statusCode).json(result.data)
  },

  create: async (req: Request, res: Response): Promise<void> => {
    const result = await svc.createVisitor(req);
    res.status(result.statusCode).json(result.data)
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    const result = await svc.deleteVisitor(req);
    res.status(result.statusCode).json(result.data)
  },
};

