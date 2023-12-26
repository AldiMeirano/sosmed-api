import jwt from "jsonwebtoken";

const secretKeys = process.env.JWT_SECRET_KEY as string;
interface PayloadToken {
  id: number;
}
export const createToken = (data: PayloadToken) => {
  const expiresIn = "1h";

  return jwt.sign(data, secretKeys, { expiresIn });
};
