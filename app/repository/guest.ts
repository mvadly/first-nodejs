import { ResponseService, responseService } from "../model/model";
import { storyModel } from "../model/guest";

export const getAllStories = async (): Promise<ResponseService> => {
  try {
    const visitor = await storyModel.find()
      .limit(10)
      .sort({ createdAt: -1 })
    return responseService(200, "OK", {
      list: visitor,
      filtered: visitor.length,
      total: await storyModel.estimatedDocumentCount(),
    })
  } catch (err: any) {
    return responseService(500, "Internal server error: " + err.message)
  }
};