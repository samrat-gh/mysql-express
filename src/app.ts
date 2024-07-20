import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import sql from "./routes/notes.route";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("🚀🚀");
});

app.use("/api/", sql);

export { app };
