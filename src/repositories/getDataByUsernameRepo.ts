import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getDataUsernameRepo = async (username: string) => {
  try {
    const datauser = await prisma.users.findMany({
      where: {
        username: username,
      },
    });
    return datauser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
