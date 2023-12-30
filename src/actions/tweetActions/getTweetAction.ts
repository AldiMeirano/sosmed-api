import { getTweetRepo } from "../../repositories/tweetsRepo/getTweetRepo";

export const getTweetAction = async () => {
  try {
    const data = await getTweetRepo();
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
