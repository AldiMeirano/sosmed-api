import express from "express";
import { registerRanoController } from "../controllers/registerRanoController";
import { loginAction } from "../actions/loginAction";
const router = express.Router();

router.post("/", registerRanoController);
export default router;
