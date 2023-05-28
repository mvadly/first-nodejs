import * as svc from "../service/guest"
import { Request, Response } from "express";
export const getAllStories = async (req:Request, res: Response): Promise<void> => {
  const result = await svc.getAllStories();
  res.status(result.statusCode).json(result.data)
}

