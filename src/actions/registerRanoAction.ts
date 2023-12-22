import { Prisma, PrismaClient } from "@prisma/client";
import { registerRanoRepo } from "../repositories/registerRanoRepo";
import { IUser } from "../type/type";
import { Response } from "express";
import { getExpenseRepo } from "../repositories/userGetRepo";
import { hashPassword } from "../bcrypt/bcrypt";
const prisma = new PrismaClient();
export const registerRanoAction = async (body: IUser) => {
  const { username, email, password } = body;
  try {
    const user = await getExpenseRepo(username, email);
    if (user?.length) {
      return {
        status: 400,
        message: "Email atau username yang di masukkan sudah terdaftar!",
      };
    }
    const hashedPassword = await hashPassword(password);
    body.password = hashedPassword;
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
