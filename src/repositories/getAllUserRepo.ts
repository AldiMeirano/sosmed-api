import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getAllDataRepo = async () => {
  try {
    const datauser = await prisma.users.findMany({
      select: {
        username: true,
        email: true,
      },
    });
    return datauser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
