import bcrypt from "bcrypt";
import { UserModel } from "../users/user.model";
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

  // const accessToken = createToken(
  //   jwtPayload,
  //   config.jwt_access_secret as string,
  //   config.jwt_access_expires_in as string,
  // );

  // const refreshToken = createToken(
  //   jwtPayload,
  //   config.jwt_refresh_secret as string,
  //   config.jwt_refresh_expires_in as string,
  // );

  return {
    jwtPayload,
  };
};
export const authService = {
  loginUser,
};
