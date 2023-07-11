import * as repo from "../repository/guest"
import { ResponseService, responseService } from "../model/model";

export const getAllStories = async (): Promise<ResponseService> => {
  return await repo.getAllStories()
};
