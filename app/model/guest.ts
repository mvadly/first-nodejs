import mongoose, { ConnectOptions } from "mongoose";
const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  video: { type: String, required: true },
  createdAt: { type: String, required: true },
} as ConnectOptions);

// Create a model based on the schema
export const storyModel: mongoose.Model<mongoose.ConnectOptions, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, mongoose.ConnectOptions>> = mongoose.model("story", storySchema);

