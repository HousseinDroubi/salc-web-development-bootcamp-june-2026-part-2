import pool from "../database/database.config.js";
import type { UserType } from "../types/user_types.js";

class UserModel {
  private static async getUserById(id: number): Promise<UserType | undefined> {
    const { rows } = await pool.query<UserType>(
      "SELECT * FROM users WHERE id = $1 LIMIT 1",
      [id],
    );

    return rows[0] as UserType;
  }

  private static async getUserByUsername(
    username: string,
  ): Promise<UserType | undefined> {
    const { rows } = await pool.query<UserType>(
      "SELECT * FROM users WHERE username = $1 LIMIT 1",
      [username],
    );

    return rows[0];
  }

  public static async getUser(
    id?: number,
    username?: string,
  ): Promise<UserType | undefined> {
    if (!id && !username) {
      throw new Error("Id or username must be provided");
    }

    if (id) {
      return await this.getUserById(id);
    }

    return await this.getUserByUsername(username!);
  }

  public static async createAccount(
    username: string,
    password: string,
  ): Promise<boolean> {
    const result = await pool.query(
      "INSERT INTO users(username, password) VALUES($1,$2)",
      [username, password],
    );

    return (result.rowCount ?? 0) > 0;
  }

  public static async updateProfile(
    username: string,
    id: number,
  ): Promise<boolean> {
    const result = await pool.query(
      "UPDATE users SET username = $1 WHERE id = $2",
      [username, id],
    );

    return (result.rowCount ?? 0) > 0;
  }

  public static async updatePassword(
    new_password: string,
    id: number,
  ): Promise<boolean> {
    const result = await pool.query(
      "UPDATE users SET password = $1 WHERE id = $2",
      [new_password, id],
    );

    return (result.rowCount ?? 0) > 0;
  }
}

export default UserModel;
