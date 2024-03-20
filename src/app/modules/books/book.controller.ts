import { Request, Response } from "express";
import { bookService } from "./book.service";
import sendResponse from "../../../utils/sendResponse";

const createBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;

    const result = await bookService.createBookToDB(book);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Error creating user",
      error: error,
    });
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Error creating book",
      error: error,
    });
  }
};

export const bookController = {
  createBook,
};
