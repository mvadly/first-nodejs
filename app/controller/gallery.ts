import * as svc from "../service/visitor"
import { Request, Response } from "express";
import fs from "fs"
import { responseService } from "../model/model";
const path = require('path');
export const galleryController = {
    getAll: async (req: Request, res: Response): Promise<void> => {
        const basePath = path.join(__dirname, "../../")
        console.log(__dirname, basePath)
        const folderPath = basePath + '/assets/gallery'; // Replace with the actual folder path

        fs.readdir(folderPath, (err, files) => {
            if (err) {
                const result = responseService(500, "internal server error:" + err.message);
                return res.status(result.statusCode).json(result.data);
            }

            const result = responseService(200, "OK", files);
            return res.status(result.statusCode).json(result.data);
        });
    }
};

