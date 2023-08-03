import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/time", (req: Request, res: Response) => {
  res.send({
    epoch: Date.now(),
  });
});

app.listen(port, () => {
  console.log(`[server]: running at http://localhost:${port}`);
});
