import { NextFunction, Request, Response } from "express";
import { getAllAction } from "../actions/getAllAction";

export const getAllController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllAction();
    res.status(200).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
