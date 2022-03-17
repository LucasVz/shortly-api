import { Router } from "express";
import { postShorten } from "../controllers/shortenController.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
const shortenRouter = Router();

shortenRouter.post('/urls/shorten',validateTokenMiddleware, postShorten);

export default shortenRouter;