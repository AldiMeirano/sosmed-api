import { Prisma, PrismaClient } from "@prisma/client";
import { registerRanoRepo } from "../repositories/registerRanoRepo";
import { IUser } from "../type/type";
import { Response } from "express";
import { getExpenseRepo } from "../repositories/userGetRepo";
const prisma = new PrismaClient();
export const registerRanoAction = async (body: IUser) => {
  const { username, email } = body;
  try {
    const user = await getExpenseRepo(username, email);
    if (user?.length) {
      return {
        status: 400,
        message: "Email atau username yang di masukkan sudah terdaftar!",
      };
    }

    const register = await registerRanoRepo(body);
    return {
      status: 200,
      message: "success",
      data: register,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
