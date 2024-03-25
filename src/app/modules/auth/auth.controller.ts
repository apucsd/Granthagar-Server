import jwt from "jsonwebtoken";
import { authService } from "./auth.service";
import config from "../../config";
import sendResponse from "../../../utils/sendResponse";
import { Request, Response } from "express";

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await authService.loginUser(user);
    const accessToken = jwt.sign(
      { email: user.email },
      config.jwt_secret as string,
      {
        expiresIn: config.expires_in,
      }
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User logged in successful",
      data: {
        accessToken,
        result,
      },
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: "User logged in unsuccessful",
      error: error.message || "Something went wrong",
    });
  }
};

export const authController = {
  loginUser,
};
