import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import promMid from "express-prometheus-middleware";
import middleware from "./middleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(middleware);

app.use(
  promMid({
    collectGCMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  })
);

app.get("/time", (req: Request, res: Response) => {
  res.send({
    epoch: Date.now(),
  });
});

app.listen(port, () => {
  console.log(`[server]: running at http://localhost:${port}`);
});

export default app;
