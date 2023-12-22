import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const findUsernameRepo = async (username: string) => {
  try {
    const datauser = await prisma.users.findUnique({
      where: { username },
    });
    return datauser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
