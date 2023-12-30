import { PrismaClient } from "@prisma/client";
import { ITweet } from "../../type/type";
const prisma = new PrismaClient();

export const getTweetRepo = async () => {
  try {
    const result = await prisma.tweets.findMany({
      include: {
        users: {
          select: {
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
