import type { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../database/database.config.js";
import type { UserType } from "../types/user_types.js";

class UserModel {
  private static async getUserById(id: number): Promise<UserType | undefined> {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE id = ? LIMIT 1",
      [id],
    );

    return rows[0] as UserType;
  }

  private static async getUserByUsername(
    username: string,
  ): Promise<UserType | undefined> {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE username = ? LIMIT 1",
      [username],
    );

    return rows[0] as UserType;
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
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO users(username, password) VALUES(?,?)",
      [username, password],
    );

    return result.affectedRows > 0;
  }

  public static async updateProfile(
    username: string,
    id: number,
  ): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      "UPDATE users SET username = ? WHERE id = ?",
      [username, id],
    );

    return result.affectedRows > 0;
  }

  public static async updatePassword(
    new_password: string,
    id: number,
  ): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      "UPDATE users SET password = ? WHERE id = ?",
      [new_password, id],
    );

    return result.affectedRows > 0;
  }
}

export default UserModel;
