import express from "express"; // runtime value import
import type { Express, Request, Response } from "express"; // type-only imports
import { PORT } from "./secrets.js";
import rootRouter from "./routes/index.js";
import { PrismaClient } from "@prisma/client";

const app: Express = express();

app.use("/api/v1", rootRouter);

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
