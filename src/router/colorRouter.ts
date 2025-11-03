import { Router } from "express";
import { getRandomColor } from "../controller/colorController";

const colorRouter = Router();

colorRouter.get("/color", getRandomColor);

export default colorRouter;
