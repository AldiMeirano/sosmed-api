import { getAllDataRepo } from "../repositories/getAllUserRepo";

export const getAllAction = async () => {
  try {
    const data = await getAllDataRepo();
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
