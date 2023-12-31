import { updateTweetRepo } from "../../repositories/tweetsRepo/updateTweetRepo";
import { ITweet } from "../../type/type";

export const updateTweetAction = async (id: number, body: ITweet) => {
  try {
    const data = await updateTweetRepo(id, body);
    return {
      status: 200,
      message: "success",
      data: data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
