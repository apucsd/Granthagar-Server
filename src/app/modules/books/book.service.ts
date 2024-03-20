import { IBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBookToDB = async (book: IBook) => {
  return await BookModel.create(book);
};
const getAllBookFromDB = async () => {
  return await BookModel.find();
};
const getSingleBookFromDB = async (id: string) => {
  return await BookModel.findOne({ _id: id });
};

export const bookService = {
  createBookToDB,

  getAllBookFromDB,
  getSingleBookFromDB,
};
