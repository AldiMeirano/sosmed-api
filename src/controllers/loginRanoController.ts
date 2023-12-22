import { NextFunction, Request, Response } from "express";
import { registerRanoAction } from "../actions/registerRanoAction";
import { accessSync } from "fs";
import { loginAction } from "../actions/loginAction";

export const loginRanoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { usernameOrEmail, password } = req.body;
    const result = await loginAction(usernameOrEmail, password);
    res.status(result.status).send(result);
  } catch (error) {
    console.log(error);
  }
};
