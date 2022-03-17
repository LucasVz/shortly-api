import { Router } from "express";
import authRouter from "./authRouter.js";
import shortenRouter from "./shortenRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(shortenRouter)

export default router;