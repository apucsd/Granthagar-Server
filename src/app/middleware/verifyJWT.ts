import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error("Unauthorized access");
    }
    jwt.verify(token, config.jwt_secret as string, (err, decoded) => {
      if (err) {
        throw new Error("You are unauthorized");
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};
