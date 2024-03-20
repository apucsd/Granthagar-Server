import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../utils/sendResponse";
import jwt from "jsonwebtoken";
import config from "../../config";
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
    const token = jwt.sign({ email: user.email }, config.jwt_secret as string, {
      expiresIn: config.expires_in,
    });
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User successfully Retrieved",
      data: {
        token,
        result,
      },
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      error: error.message || "Something went wrong",
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedBook = req.body;
  const result = await userService.updateUserFromDB(id, updatedBook);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single User updated successfully",
    data: result,
  });
};
const deleteSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await userService.deleteSingleUserFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single user deleted successfully",
    data: result,
  });
};
export const userController = {
  createUser,
  getUser,
  findUser,
  updateUser,
  deleteSingleUser,
};
