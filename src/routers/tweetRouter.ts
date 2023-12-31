import express from "express";
import { addTweetController } from "../controllers/tweetsControllers/addTweetController";
import { getTweetController } from "../controllers/tweetsControllers/getTweetControllers";
import { deleteTweetController } from "../controllers/tweetsControllers/deleteTweetController";

const router = express.Router();

router.post("/add-tweet", addTweetController);
router.get("/", getTweetController);
router.delete("/:id", deleteTweetController);
export default router;
