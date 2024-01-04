import { NextFunction, Request, Response } from "express";
import { getTweetAction } from "../../actions/tweetActions/getTweetAction";
import { getTweetByIdAction } from "../../actions/tweetActions/getTweetByIdAction";

export const getTweetByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = parseInt(req.params.id);
  try {
    const result = await getTweetByIdAction(userId);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
