import { Router } from "express";
import { TweetController } from "../controllers/tweetsControllers/tweetControllers";

export class TweetRouter {
  private router: Router;
  private tweetController: TweetController;

  constructor() {
    this.tweetController = new TweetController();
    this.router = Router();
    this.initilizeRoutes();
  }
  private initilizeRoutes(): void {
    this.router.get("/", this.tweetController.getTweetController);
    this.router.post("/add-tweet", this.tweetController.addTweetController);
    this.router.delete("/:id", this.tweetController.deleteTweetController);
    this.router.get(
      "/profile/:id",
      this.tweetController.getTweetByIdController
    );
    this.router.patch("/:id", this.tweetController.updateTweetController);
  }

  getRouter(): Router {
    return this.router;
  }
}
