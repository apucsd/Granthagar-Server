import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../utils/sendResponse";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const result = await userService.createUserToDB(user);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Error creating user",
      error: error,
    });
  }
};
const getUser = async (req: Request, res: Response) => {
  const result = await userService.getAllUserToDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User successfully fetched",
    data: result,
  });
};
const findUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.findUserFromDB(user);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User successfully Retrieved",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      error: error.message || "Something went wrong",
    });
  }
};

export const userController = {
  createUser,
  getUser,
  findUser,
};
