import { IBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBookToDB = async (book: IBook) => {
  return await BookModel.create(book);
};

export const bookService = {
  createBookToDB,
};
