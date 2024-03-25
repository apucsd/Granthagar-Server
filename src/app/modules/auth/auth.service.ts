import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../users/user.model";
import config from "../../config";
const loginUser = async (payload: any) => {
  // checking if the user is exist

  const { email, password } = payload;
  const foundUser = await UserModel.findOne({ email });

  if (!foundUser) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, foundUser.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }
  const jwtPayload = {
    userEmail: foundUser.email,
    role: foundUser.role,
  };
  // console.log(jwtPayload, "this is from auth service ");
  const accessToken = jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: config.expires_in,
  });

  // const refreshToken = createToken(
  //   jwtPayload,
  //   config.jwt_refresh_secret as string,
  //   config.jwt_refresh_expires_in as string,
  // );

  return {
    accessToken,
  };
};
export const authService = {
  loginUser,
};
