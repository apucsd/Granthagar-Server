import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/users", userController.createUser);
router.post("/users/login", userController.findUser);
router.get("/users", userController.getUser);

export const userRouter = router;
