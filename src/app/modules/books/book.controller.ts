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
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Error creating book",
      error: error,
    });
  }
};

const getAllBook = async (req: Request, res: Response) => {
  const query = req.query;

  const { limitQuery, total, totalPage } = await bookService.getAllBookFromDB(
    query
  );
  console.log({ total, totalPage });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books fetched successfully",
    data: limitQuery,
    meta: {
      total: total,
      totalPage: totalPage,
    },
  });
};

const getSingleBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await bookService.getSingleBookFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single Book fetched successfully",
    data: result,
  });
};
const deleteSingleBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await bookService.deleteSingleBookFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single Book deleted successfully",
    data: result,
  });
};
const updateSingleBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedBook = req.body;
  const result = await bookService.updateSingleBookFromDB(id, updatedBook);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Single Book update successfully",
    data: result,
  });
};

export const bookController = {
  createBook,
  getAllBook,
  getSingleBook,
  deleteSingleBook,
  updateSingleBook,
};
