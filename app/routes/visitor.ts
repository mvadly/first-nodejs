import express, { Request, Response } from "express";
import mongoose from "mongoose";
const visitorController = require("../controller/visitor");
const VisitorRoute = express.Router();

VisitorRoute.get("/all", visitorController.getAll);
VisitorRoute.post("/create", visitorController.create);
VisitorRoute.get("/ok", async (req: Request, res: Response) => {
    // Define a schema for a sample model
    const sampleSchema = new mongoose.Schema({
        name: { type: String, required: true },
        value: { type: Number, required: true },
    });

    // Create a model based on the schema
    const Sample = mongoose.model('Sample', sampleSchema);
    try {
        const { name, value } = {
            name: "",
            value: 0
        };
        const sample = new Sample({ name, value });
        await sample.save();
        res.status(201).json(sample);
    } catch (err: any) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }

},)
// VisitorRoute.put("/update/:id", visitorController.update);
// VisitorRoute.delete("/update/:id", visitorController.delete);

module.exports = VisitorRoute;
