import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findUserByIdRepo = async (id: number) => {
  try {
    const dataUser = await prisma.users.findUnique({
      where: {
        id,
      },
    });
    return dataUser;
  } catch (error) {
    console.log(error);
  }
};
