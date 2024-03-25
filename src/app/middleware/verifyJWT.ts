import { NextFunction, Request, Response } from "express";

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      throw new Error("Unauthorized access");
    }

    next();
  } catch (error) {
    next(error);
  }
};
