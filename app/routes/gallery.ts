import express from "express";
import { galleryController } from "../controller/gallery";
const GalleryRoute = express.Router();

GalleryRoute.get("/all", galleryController.getAll);

export default GalleryRoute;
