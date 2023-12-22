import bcrypt from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
  const saltRound = 10;
  return await bcrypt.hash(password, saltRound);
};
