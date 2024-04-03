export interface IBook {
  title: string;
  authors: string[]; // Array of authors
  isbn: string; // Optional ISBN number
  publisher: string; // Optional publisher name
  publicationYear?: number; // Optional publication year
  ratings?: number; // Optional publication year
  category?: string[]; // Array of genres the book belongs to
  image?: string;
  language: string; // Language of the book
  description?: string; // Optional description of the book
  price: number; // Price of the book
  quantity: number; // Quantity available
  weight?: string;
  createdAt: Date;
  updatedAt: Date;
}
