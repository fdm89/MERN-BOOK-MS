import express from "express";
import {
  deleteBook,
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
} from "../controllers/book.js";

const router = express.Router();

router.post("/", insertBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
