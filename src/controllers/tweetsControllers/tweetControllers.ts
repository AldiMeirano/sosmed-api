import { NextFunction, Request, Response } from "express";
import { getTweetAction } from "../../actions/tweetActions/getTweetAction";
import { addTweetAction } from "../../actions/tweetActions/addTweetAction";
import { getTweetByIdAction } from "../../actions/tweetActions/getTweetByIdAction";
import { deleteTweetAction } from "../../actions/tweetActions/deleteTweetAction";
import { updateTweetAction } from "../../actions/tweetActions/updateTweetAction";

export class TweetController {
  // Get user tweet
  async getTweetController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getTweetAction();
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }
  // Add tweet userRouter
  async addTweetController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await addTweetAction(req.body);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }
  // Get data by id
  async getTweetByIdController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const userId = parseInt(req.params.id);
    try {
      const result = await getTweetByIdAction(userId);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  // Delete data
  async deleteTweetController(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    try {
      const result = await deleteTweetAction(id);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }

  // Update tweet
  async updateTweetController(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    try {
      const result = await updateTweetAction(id, req.body);
      res.status(result.status).send(result);
    } catch (error) {
      next(error);
      throw error;
    }
  }
}
