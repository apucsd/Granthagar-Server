import express from "express";
import { bookController } from "./book.controller";
const router = express.Router();

router.get("/books", bookController.getAllBook);
router.get("/books/:id", bookController.getSingleBook);
router.post("/books", bookController.createBook);
router.delete("/books/:id", bookController.deleteSingleBook);
router.patch("/books/:id", bookController.updateSingleBook);
// router.get("/users", bookContoller.getUser);
// router.get("/users/login", bookContoller.findUser);

export const bookRouter = router;
