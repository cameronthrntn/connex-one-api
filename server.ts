import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import middleware from "./middleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/time", middleware, (req: Request, res: Response) => {
  res.send({
    epoch: Date.now(),
  });
});

app.listen(port, () => {
  console.log(`[server]: running at http://localhost:${port}`);
});
