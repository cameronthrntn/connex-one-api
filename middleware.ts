import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (token === process.env.SECRET) next();
    else throw "invalid token";
  } catch {
    res.status(403).send({
      error: "Invalid Token!",
    });
  }
};
