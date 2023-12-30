import { NextFunction, Request, Response } from "express";
import { getTweetAction } from "../../actions/tweetActions/getTweetAction";

export const getTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getTweetAction();
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
