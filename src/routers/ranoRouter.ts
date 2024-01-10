// import express from "express";
// import { registerRanoController } from "../controllers/registerRanoController";
// import { loginRanoController } from "../controllers/loginRanoController";
// import { keepLoginController } from "../controllers/keepLoginController";
// import { verifyToken } from "../middleware/jwtVerifyToken";
// import { findUserIdController } from "../controllers/findUserIdController";
// import { getAllController } from "../controllers/getAllUser";
// const router = express.Router();

// router.post("/register", registerRanoController);
// router.post("/login", loginRanoController);
// router.get("/keeplogin", verifyToken, keepLoginController);
// router.get("/:id", findUserIdController);
// router.get("/", getAllController);
// export default router;

import { Router } from "express";
// import { TweetController } from "../controllers/tweetsControllers/tweetControllers";
import { UserContoller } from "../controllers/userControllers";
import { verifyToken } from "../middleware/jwtVerifyToken";
export class UserRouter {
  private router: Router;
  private userController: UserContoller;

  constructor() {
    this.userController = new UserContoller();
    this.router = Router();
    this.initilizeRoutes();
  }
  private initilizeRoutes(): void {
    this.router.get("/", this.userController.getAllUser);
    this.router.get("/:id", this.userController.findUserId);
    this.router.get("/keeplogin", verifyToken, this.userController.keepLogin);
    this.router.post("/register", this.userController.register);
    this.router.post("/login", this.userController.login);
  }

  getRouter(): Router {
    return this.router;
  }
}
