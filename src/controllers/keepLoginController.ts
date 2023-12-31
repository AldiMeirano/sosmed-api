import { NextFunction, Request, Response } from "express";
import { keepLoginAction } from "../actions/keepLoginAction";

export const keepLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body.user;
    const result = await keepLoginAction(Number(id));
    res.status(200).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
