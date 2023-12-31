import { PrismaClient } from "@prisma/client";
import { ITweet } from "../../type/type";
const prisma = new PrismaClient();

export const updateTweetRepo = async (id: number, body: ITweet) => {
  const { tweet } = body;
  try {
    const result = await prisma.tweets.update({
      where: { id },
      data: { tweet },
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
