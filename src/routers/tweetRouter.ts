import express from "express";
import { addTweetController } from "../controllers/tweetsControllers/addTweetController";
import { getTweetController } from "../controllers/tweetsControllers/getTweetControllers";
import { deleteTweetController } from "../controllers/tweetsControllers/deleteTweetController";
import { updateTweetController } from "../controllers/tweetsControllers/updateTweetController";
import { getTweetByIdController } from "../controllers/tweetsControllers/getTweetByIdController";

const router = express.Router();

router.post("/add-tweet", addTweetController);
router.get("/", getTweetController);
router.delete("/:id", deleteTweetController);
router.patch("/:id", updateTweetController);
router.get("/profile/:id", getTweetByIdController);
export default router;
