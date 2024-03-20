import { IBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBookToDB = async (book: IBook) => {
  return await BookModel.create(book);
};
const getAllBookFromDB = async (query = {}) => {
  return await BookModel.find(query);
};
const getSingleBookFromDB = async (id: string) => {
  return await BookModel.findOne({ _id: id });
};
const deleteSingleBookFromDB = async (id: string) => {
  return await BookModel.findOneAndDelete({ _id: id });
};
const updateSingleBookFromDB = async (id: string, updatedBook: IBook) => {
  return await BookModel.findByIdAndUpdate(
    { _id: id },
    { $set: updatedBook },
    { new: true }
  );
};

export const bookService = {
  createBookToDB,
  getAllBookFromDB,
  getSingleBookFromDB,
  deleteSingleBookFromDB,
  updateSingleBookFromDB,
};
