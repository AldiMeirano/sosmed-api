import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTweetByIdRepo = async (userId: number) => {
  try {
    const result = await prisma.tweets.findMany({
      where: {
        userId,
      },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc", // Urutkan berdasarkan createdAt dari yang terbaru ke yang terlama
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
