import express from "express";
import { userController } from "./user.controller";
import { verifyJWT } from "../../middleware/verifyJWT";
const router = express.Router();

router.get("/users", userController.getUser);
router.post("/users", userController.createUser);
// router.post("/users/login", userController.findUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteSingleUser);

export const userRouter = router;
