import { NextFunction, Request, Response } from "express";
import { registerRanoAction } from "../actions/registerRanoAction";
import { accessSync } from "fs";

export const registerRanoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerRanoAction(req.body);
    res.status(result.status).send(result);
  } catch (error) {
    console.log(error);
  }
};
