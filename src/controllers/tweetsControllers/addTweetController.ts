import { NextFunction, Request, Response } from "express";
import { addTweetAction } from "../../actions/tweetActions/addTweetAction";

export const addTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await addTweetAction(req.body);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
