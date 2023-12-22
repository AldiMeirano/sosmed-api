import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getDataEmailRepo = async (email: string) => {
  try {
    const datauser = await prisma.users.findMany({
      where: {
        email,
      },
    });
    return datauser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
