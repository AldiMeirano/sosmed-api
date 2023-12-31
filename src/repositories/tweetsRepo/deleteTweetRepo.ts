import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteTweetRepo = async (id: number) => {
  try {
    const result = await prisma.tweets.delete({
      where: { id },
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
