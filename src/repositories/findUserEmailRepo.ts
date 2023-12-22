import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const findUserEmailRepo = async (email: string) => {
  try {
    const datauser = await prisma.users.findUnique({
      where: { email },
    });
    return datauser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
