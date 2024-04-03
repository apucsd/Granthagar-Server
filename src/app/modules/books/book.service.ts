import { IBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBookToDB = async (book: IBook) => {
  return await BookModel.create(book);
};
////////////////////////////////

const getAllBookFromDB = async (query: Record<string, unknown>) => {
  // console.log(query);
  const queryObject = { ...query };
  let excludeQueryFields = ["searchTerm", "page", "sort", "limit"].forEach(
    (element) => delete queryObject[element]
  );

  let searchTerm = ""; // this is for partial search
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  // console.log(query);
  // PARTIAL SEARCH TERM STRUCTURE
  const searchQuery = BookModel.find({
    $or: ["title", "language", "authors", "category"].map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
      //  HOW WILL IT LOOKS LIKE
      //   { email: { $regex : query.searchTerm , $options: "i"}}
    })),
  });

  const filterQuery = searchQuery.find(queryObject);

  ///////SORTING DATA sort=-createdAt
  let sort = "-createdAt";
  if (query.sort) {
    sort = query.sort as string;
  }
  const sortQuery = filterQuery.sort(sort);

  ////limit query data
  let limit = 20;
  if (query.limit) {
    limit = Number(query.limit);
  }

  let page = 1;
  let skip = 0;
  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }
  const paginatedQuery = sortQuery.skip(skip);
  const total = await BookModel.countDocuments();
  const totalPage = Math.ceil(total / limit);
  const limitQuery = await paginatedQuery.limit(limit);
  return { limitQuery, total, totalPage };
};

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
