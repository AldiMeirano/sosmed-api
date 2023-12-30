import { addTweetRepo } from "../../repositories/tweetsRepo/addTweetRepo";
import { ITweet } from "../../type/type";

export const addTweetAction = async (tweetUser: ITweet) => {
  try {
    // const expenses = await prisma.expense.findMany()
    const expense = await addTweetRepo(tweetUser);
    return {
      status: 200,
      message: "success",
      data: expense,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
