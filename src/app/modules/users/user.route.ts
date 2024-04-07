import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.get("/users", userController.getUser);
router.post("/users", userController.createUser);
router.patch("/users/:email", userController.updateUser);
router.delete("/users/:id", userController.deleteSingleUser);

export const userRouter = router;
