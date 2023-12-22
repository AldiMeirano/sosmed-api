import { PrismaClient } from "@prisma/client";
import { registerRanoRepo } from "../repositories/registerRanoRepo";
import { IUser } from "../type/type";
import { getDataUsernameRepo } from "../repositories/getDataByUsernameRepo";
import { getDataEmailRepo } from "../repositories/getDataByEmail";

const prisma = new PrismaClient();
export const loginAction = async (
  userNameOrEmail: string,
  password: string
) => {
  try {
    const dataUsername = await getDataUsernameRepo(userNameOrEmail);
    const dataEmail = await getDataEmailRepo(userNameOrEmail);
   
const userEmai = dataEmail.includes("@")
    // if(dataUsername)

    // if (dataUsername?.length) {
    //
    // } else {
    //   return {
    //     status: 400,
    //     message: "Data tidak ketemu",
    //   };
    // }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
