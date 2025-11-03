import { Request, Response } from "express";
import { generateRandomColor } from "../utils/colorConverter";

export const getRandomColor = (req: Request, res: Response) => {
  const color = generateRandomColor();
  res.json(color);
};
