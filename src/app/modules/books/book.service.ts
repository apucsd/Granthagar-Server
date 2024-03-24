import { IBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBookToDB = async (book: IBook) => {
  return await BookModel.create(book);
};
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
const getAllBookFromDB = async (query: Record<string, unknown>) => {
  console.log(query);
  const queryObject = { ...query };
  let excludeQueryFields = ["searchTerm", "page", "sort"].forEach(
    (element) => delete queryObject[element]
  );

  let searchTerm = ""; // this is for partial search
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  // PARTIAL SEARCH TERM STRUCTURE
  const searchQuery = BookModel.find({
    $or: ["title", "language", "authors", "category"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
      //  HOW WILL IT LOOKS LIKE
      //   { email: { $regex : query.searchTerm , $options: "i"}}
    })),
  });
  const filterQuery = searchQuery.find(queryObject);

  let sort = "-createdAt";
  if (query.sort) {
    sort = query.sort as string;
  }
  const sortQuery = await filterQuery.sort(sort);
  return sortQuery;
};

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

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
