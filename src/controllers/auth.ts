import type { Request, Response } from "express";
import { prismaClient } from "../server.js";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
};
