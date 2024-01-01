import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTweetByIdRepo = async (id: number) => {
  try {
    const result = await prisma.tweets.findUnique({
      where: { id },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    // Disconnect dari Prisma setelah selesai
    await prisma.$disconnect();
  }
};
