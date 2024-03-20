import express from "express";
import { bookController } from "./book.controller";
const router = express.Router();

router.post("/books", bookController.createBook);
// router.get("/users", bookContoller.getUser);
// router.get("/users/login", bookContoller.findUser);

export const bookRouter = router;
