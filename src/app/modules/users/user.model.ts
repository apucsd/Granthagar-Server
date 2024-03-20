import { Schema, model, Document, Error } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "seller", "guest"],
    default: "guest",
  },
});

userSchema.pre("save", async function (next) {
  try {
    const user = this;
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds)
    );
    next();
  } catch (error: unknown) {
    next(error as Error); // Explicitly specify the type of error
  }
});

export const UserModel = model<IUser>("User", userSchema);
