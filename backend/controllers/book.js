import { Book } from "../models/bookModel.js";
import mongoose from "mongoose";

export const insertBook = async (request, response) => {
  const book = new Book(request.body);

  try {
    await book.save();
    response.status(201).json(book);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getAllBooks = async (request, response) => {
  try {
    const books = await Book.find();

    response.status(200).json(books);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getBookById = async (request, response) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return response.status(404).json({ message: "invalid id" });

  try {
    const book = await Book.findById(id);
    response.status(200).json(book);
  } catch (error) {
    response.status(500).json({ messase: error.message });
  }
};

export const updateBook = async (request, response) => {
  const { id } = request.params;
  const data = { ...request.body };

  if (!mongoose.Types.ObjectId.isValid(id))
    return response.status(404).json({ message: "invalid id" });

  try {
    const book = await Book.findByIdAndUpdate(id, data, { new: true });
    response.status(200).json(book);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (request, response) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return response.status(404).json({ message: "invalid id" });
  try {
    await Book.findByIdAndDelete(id);
    response.status(200).json({ message: "book deleted successfull" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
