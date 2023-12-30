import { PrismaClient } from "@prisma/client";
import { ITweet } from "../../type/type";
const prisma = new PrismaClient();

export const addTweetRepo = async (body: ITweet) => {
  const { tweet, userId } = body;
  try {
    const result = await prisma.tweets.create({
      data: { tweet, userId },
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
