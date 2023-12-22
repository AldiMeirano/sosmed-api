import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getDataByPasswordRepo = async (password: string) => {
  try {
    const datauser = await prisma.users.findMany({
      where: {
        password,
      },
    });
    return datauser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
