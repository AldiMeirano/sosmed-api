import express from "express";
import { registerRanoController } from "../controllers/registerRanoController";
import { loginAction } from "../actions/loginAction";
import { loginRanoController } from "../controllers/loginRanoController";
const router = express.Router();

router.post("/register", registerRanoController);
router.post("/login", loginRanoController);
export default router;
