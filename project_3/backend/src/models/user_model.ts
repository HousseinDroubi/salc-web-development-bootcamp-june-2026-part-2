import UserSchemaModel from "../schemas/user_schema.js";
import type { UserType } from "../types/user_types.js";

class UserModel {
  private static async getUserById(_id: string): Promise<UserType | null> {
    const user = await UserSchemaModel.findById(_id).lean();
    return user;
  }

  private static async getUserByUsername(
    username: string,
  ): Promise<UserType | null> {
    const user = await UserSchemaModel.findOne({ username }).lean();
    return user;
  }

  public static async getUser(
    _id?: string,
    username?: string,
  ): Promise<UserType | null> {
    if (!_id && !username) {
      throw new Error("_id or username must be provided");
    }

    if (_id) {
      return await this.getUserById(_id);
    }

    return await this.getUserByUsername(username!);
  }

  public static async createAccount(
    username: string,
    password: string,
  ): Promise<boolean> {
    const result = await UserSchemaModel.create({
      username,
      password,
    });

    return Boolean(result?._id);
  }

  public static async updateProfile(
    username: string,
    _id: string,
  ): Promise<boolean> {
    const result = await UserSchemaModel.updateOne(
      { _id: _id },
      { $set: { username } },
      { runValidators: true },
    );

    return result.modifiedCount > 0;
  }

  public static async updatePassword(
    hashedPassword: string,
    _id: string,
  ): Promise<boolean> {
    const result = await UserSchemaModel.updateOne(
      { _id: _id },
      { $set: { password: hashedPassword } },
      { runValidators: true },
    );

    return result.modifiedCount > 0;
  }
}

export default UserModel;
