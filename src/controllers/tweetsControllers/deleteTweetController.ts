import { NextFunction, Request, Response } from "express";
import { deleteTweetAction } from "../../actions/tweetActions/deleteTweetAction";

export const deleteTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await deleteTweetAction(id);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
    throw error;
  }
};
