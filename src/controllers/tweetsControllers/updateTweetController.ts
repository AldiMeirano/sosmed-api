import { NextFunction, Request, Response } from "express";
import { updateTweetAction } from "../../actions/tweetActions/updateTweetAction";

export const updateTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await updateTweetAction(id, req.body);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
