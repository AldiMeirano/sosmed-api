import { PrismaClient } from "@prisma/client";
import { IUser } from "../type/type";
const prisma = new PrismaClient();

export const registerRanoRepo = async (body: IUser) => {
  const { username, email, password } = body;
  try {
    const result = await prisma.users.create({
      data: { username, email, password },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// name: string;
// email: string;
// password: string;
