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
            let data: any[] = []
            const inputArray = files;
            const chunkSize = 3; // Number of elements in each chunk

            for (let i = 0; i < inputArray.length; i += chunkSize) {
                const chunk = inputArray.slice(i, i + chunkSize);
                const urls: any = []
                chunk.forEach((v) => {
                    urls.push(`${process.env.APP_HOST}/asset/gallery/${v}`)
                })
                data.push({ list: urls });
            }

            const result = responseService(200, "OK", data);
            return res.status(result.statusCode).json(result.data);
        });
    }
};

