import { NextFunction, Request, Response } from "express";
import { keepLoginAction } from "../actions/keepLoginAction";
import { findUserByIdAction } from "../actions/findUserIdAction";

export const findUserIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const result = await findUserByIdAction(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
