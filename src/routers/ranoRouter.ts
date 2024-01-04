import express from "express";
import { registerRanoController } from "../controllers/registerRanoController";
import { loginRanoController } from "../controllers/loginRanoController";
import { keepLoginController } from "../controllers/keepLoginController";
import { verifyToken } from "../middleware/jwtVerifyToken";
import { findUserIdController } from "../controllers/findUserIdController";
const router = express.Router();

router.post("/register", registerRanoController);
router.post("/login", loginRanoController);
router.get("/keeplogin", verifyToken, keepLoginController);
router.get("/:id", findUserIdController);
export default router;
