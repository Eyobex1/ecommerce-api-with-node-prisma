import { Router } from "express";
import { signup } from "../controllers/auth.js";

const authRoutes = Router();

authRoutes.get("/signup", signup);

export default authRoutes;
