import express from "express";
import { bookController } from "./book.controller";
import { verifyJWT } from "../../middleware/verifyJWT";
const router = express.Router();

router.get("/books", verifyJWT, bookController.getAllBook);
router.get("/books/:id", bookController.getSingleBook);
router.post("/books", bookController.createBook);
router.delete("/books/:id", bookController.deleteSingleBook);
router.patch("/books/:id", bookController.updateSingleBook);
//by query

export const bookRouter = router;
