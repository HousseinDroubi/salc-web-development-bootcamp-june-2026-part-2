import UserModel from "../models/user_model.js";
import type { LoginResponseDtoType } from "../types/responses/user_responses.js";
import type { UserType } from "../types/user_types.js";
import BcryptUtils from "../utils/bcrypt_utls.js";
import JwtUtils from "../utils/token_utils.js";

class UserService {
  public static async login(
    username: string,
    password: string,
  ): Promise<LoginResponseDtoType | 401> {
    const user = await UserModel.getUser(undefined, username);
    if (!user) {
      return 401;
    }

    const password_result = await BcryptUtils.comparePasswords(
      password,
      user.password,
    );

    if (!password_result) {
      return 401;
    }

    return {
      username: user.username,
      token: JwtUtils.signToken({
        id: user.id,
      }),
    };
  }

  public static async createAccount(
    username: string,
    password: string,
  ): Promise<201 | 403 | 500> {
    const user: UserType | undefined = await UserModel.getUser(
      undefined,
      username,
    );
    if (user) {
      return 403;
    }

    const hashed_password = await BcryptUtils.hashPassword(password);
    const result = await UserModel.createAccount(username, hashed_password);
    if (!result) {
      return 500;
    }
    return 201;
  }
  public static async updateProfile(
    id: number,
    username: string,
  ): Promise<403 | 500 | string> {
    const user = await UserModel.getUser(undefined, username);

    if (user) {
      return 403;
    }

    const result = await UserModel.updateProfile(username, id);
    if (!result) {
      return 500;
    }

    return username;
  }

  public static async updatePassword(
    id: number,
    old_password: string,
    new_password: string,
  ): Promise<200 | 401 | 404 | 500> {
    const user = await UserModel.getUser(id);

    if (!user) {
      return 404;
    }

    const result = await BcryptUtils.comparePasswords(
      old_password,
      user.password,
    );
    if (!result) {
      return 401;
    }

    const is_user_added = await UserModel.updatePassword(new_password, id);
    return is_user_added ? 200 : 500;
  }
}

export default UserService;
