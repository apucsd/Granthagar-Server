import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    authors: { type: [String], required: true },
    isbn: { type: String, required: true },
    publisher: { type: String },
    publicationYear: { type: Number },
    ratings: { type: Number },
    category: { type: [String] },
    image: { type: String },
    language: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    weight: { type: String },
  },
  { timestamps: true }
);

export const BookModel = model<IBook>("book", bookSchema);
