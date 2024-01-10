// import express, { NextFunction, Request, Response } from "express";
// import registerRano from "./routers/ranoRouter";
import { TweetRouter } from "./routers/tweetRouter";
// import cors from "cors";

// const PORT = process.env.PORT || 3000;

// const app = express();
// app.use(express.json());
// // Middleware Error handler
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(400).send(err.message);
// });
// app.use(cors());
// app.use("/users", registerRano);
// app.use("/tweet", TweetRouter);
// app.post("/", (req, res) => {
//   res.send("Api");
// });

// app.listen(PORT, () => {
//   console.log("App run on port 3000");
// });

import express, {
  Express,
  NextFunction,
  Request,
  Response,
  json,
} from "express";
import cors, { CorsOptions } from "cors";
import { UserRouter } from "./routers/ranoRouter";

export default class App {
  private app: Express;
  constructor() {
    this.app = express();
    this.configure();
    this.routers();
    this.handleError();
  }
  //   Private handelError
  private handleError(): void {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log("Error: ", err);
        res.status(500).send(err.message);
      }
    );
  }

  private routers() {
    const tweetUser = new TweetRouter();
    const userRouter = new UserRouter();
    this.app.use("/tweets", tweetUser.getRouter());
    this.app.use("/users", userRouter.getRouter());
  }
  private configure() {
    this.app.use(cors());
    this.app.use(json());
  }
  public start() {
    this.app.listen(8000, () => {
      console.log("Server running on port http://localhost:8000");
    });
  }
}
