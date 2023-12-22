import express from "express";

import { loginRanoController } from "../controllers/loginRanoController";
const router = express.Router();

router.post("/", loginRanoController);
export default router;
