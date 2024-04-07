import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserToDB = async (user: IUser) => {
  return await UserModel.create(user);
};
// const findUserFromDB = async (user: IUser) => {
//   const { email, password } = user;
//   const foundUser = await UserModel.findOne({ email });

//   if (!foundUser) {
//     throw new Error("User not found");
//   }

//   const isPasswordValid = await bcrypt.compare(password, foundUser.password);

//   if (!isPasswordValid) {
//     throw new Error("Invalid password");
//   }

//   return foundUser;
// };
const getAllUserToDB = async () => {
  return await UserModel.find();
};
const updateUserFromDB = async (email: string, user: IUser) => {
  return await UserModel.findOneAndUpdate(
    { email: email },
    { $set: user },
    { new: true }
  );
};
const deleteSingleUserFromDB = async (id: string) => {
  return await UserModel.findOneAndDelete({ _id: id });
};
export const userService = {
  createUserToDB,
  // findUserFromDB,
  getAllUserToDB,
  updateUserFromDB,
  deleteSingleUserFromDB,
};
