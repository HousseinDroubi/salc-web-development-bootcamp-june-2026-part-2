import { type Request, type Response } from "express";
import UserService from "../services/user_service.js";
import type { loginAndCreateAccountDto } from "../validations/requests/auth/validate_create_accout.js";
import type { LoginResponseDtoType } from "../types/responses/user_responses.js";
import type { updateProfileDto } from "../validations/requests/auth/validate_update_profile.js";
import type { updatePasswordDto } from "../validations/requests/auth/validate_update_password.js";

class UserController {
  public static createAccount = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { username, password }: loginAndCreateAccountDto = req.body;
    const result = await UserService.createAccount(username, password);

    if (result == 403) {
      res.status(result).json({
        message: "Username taken",
      });
      return;
    }

    if (result == 500) {
      res.status(result).json({
        message: "Internal Server Error",
      });
      return;
    }

    res.status(result).json({
      message: "Account created",
    });
  };

  public static login = async (req: Request, res: Response): Promise<void> => {
    const { username, password }: loginAndCreateAccountDto = req.body;
    const result: LoginResponseDtoType | 401 = await UserService.login(
      username,
      password,
    );
    if (result == 401) {
      res.status(result).json({
        message: "Wrong username or password",
      });
      return;
    }

    res
      .cookie("token", result.token, {
        httpOnly: true,
        // sameSite: "strict", strict when both frontend and backend are hosted on the same domain
        sameSite: "none", // none when both frontend and backend are hosted on completely different domains
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Logged in",
        username: result.username,
      });
  };
  public static updateProfile = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { username, id }: updateProfileDto = req.body;
    const result = await UserService.updateProfile(id, username);
    if (result == 500) {
      res.status(result).json({
        message: "Couldn't uypdate user profile",
      });
      return;
    } else if (result == 403) {
      res.status(result).json({
        message: "Username taken",
      });
      return;
    }

    res.status(200).json({
      message: "Username updated",
      new_username: result,
    });
  };
  public static updatePassword = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    const { old_password, new_password, id }: updatePasswordDto = req.body;

    const result = await UserService.updatePassword(
      id,
      old_password,
      new_password,
    );
    if (result == 401) {
      res.status(result).json({
        message: "Old password is wrong",
      });
      return;
    }

    if (result == 404) {
      res.status(result).json({
        message: "User not found",
      });
      return;
    }

    if (result == 500) {
      res.status(result).json({
        message: "Couldn't update password",
      });
      return;
    }

    res.status(result).json({
      message: "Password updated",
    });
  };
}

export default UserController;
