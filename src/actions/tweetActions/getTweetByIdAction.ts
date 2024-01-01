import { getTweetByIdRepo } from "../../repositories/tweetsRepo/getTweetByIdRepo";

export const getTweetByIdAction = async (id: number) => {
  try {
    const data = await getTweetByIdRepo(id);
    if (!data) {
      return {
        status: 404,
        message: "Data not found",
        data: data,
      };
    }
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
