import express from "express";
import { addTweetController } from "../controllers/tweetsControllers/addTweetController";
import { getTweetController } from "../controllers/tweetsControllers/getTweetControllers";

const router = express.Router();

router.post("/add-tweet", addTweetController);
router.get("/", getTweetController);
export default router;
