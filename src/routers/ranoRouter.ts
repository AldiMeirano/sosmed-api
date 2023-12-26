import express from "express";
import { registerRanoController } from "../controllers/registerRanoController";
import { loginAction } from "../actions/loginAction";
import { loginRanoController } from "../controllers/loginRanoController";
import { keepLoginController } from "../controllers/keepLoginController";
import { verifyToken } from "../middleware/jwtVerifyToken";
const router = express.Router();

router.post("/register", registerRanoController);
router.post("/login", loginRanoController);
router.get("/keeplogin", verifyToken, keepLoginController);
export default router;
