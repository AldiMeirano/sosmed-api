import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getExpenseRepo = async (username: string, email: string) => {
  try {
    const datauser = await prisma.users.findMany({
      where: {
        OR: [
          {
            username: {
              equals: username,
            },
          },
          {
            email: {
              equals: email,
            },
          },
        ],
      },
    });
    return datauser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
