import { authService } from "./auth.service";
import sendResponse from "../../../utils/sendResponse";
import { Request, Response } from "express";

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const { accessToken } = await authService.loginUser(user);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User logged in successful",
      data: {
        accessToken,
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
