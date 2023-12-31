import { deleteTweetRepo } from "../../repositories/tweetsRepo/deleteTweetRepo";
import { getTweetAction } from "./getTweetAction";

export const deleteTweetAction = async (id: number) => {
  try {
    const data = await deleteTweetRepo(id);
    const result = await getTweetAction();
    return {
      status: 200,
      message: "success delete tweet",
      data: data,
      result: result,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
