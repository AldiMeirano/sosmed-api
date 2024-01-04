import { findUserByIdRepo } from "../repositories/findUserByIdRepo";

export const findUserByIdAction = async (id: number) => {
  try {
    const data = await findUserByIdRepo(id);
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
