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
    const result = await loginAction(req.body.username, req.body.password);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
