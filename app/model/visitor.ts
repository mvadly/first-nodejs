import mongoose, { ConnectOptions } from "mongoose";
const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  lat: { type: String, required: false },
  lng: { type: String, required: false },
  from: { type: Array, required: true },
  ip: { type: String, required: true },
  createdAt: { type: String, required: true },
} as ConnectOptions);

// Create a model based on the schema
const vModel = mongoose.model("visitor", visitorSchema);
module.exports = vModel;
