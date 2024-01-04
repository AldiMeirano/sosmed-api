import { getTweetByIdRepo } from "../../repositories/tweetsRepo/getTweetByIdRepo";

export const getTweetByIdAction = async (userId: number) => {
  try {
    const data = await getTweetByIdRepo(userId);
    // console.log(data);

    // if (!data) {
    //   return {
    //     status: 404,
    //     message: "Data not found",
    //     data: data,
    //   };
    // }
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
