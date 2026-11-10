import { Prisma } from "../generated/prisma/index.js";
import { prisma } from "../prisma/prisma.js";
import type { UserType } from "../types/user_types.js";

class UserModel {
  private static async getUserById(id: string): Promise<UserType | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  private static async getUserByUsername(
    username: string,
  ): Promise<UserType | null> {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    return user;
  }

  public static async getUser(
    id?: string,
    username?: string,
  ): Promise<UserType | null> {
    if (!id && !username) {
      throw new Error("id or username must be provided");
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
    const result = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    return Boolean(result?.id);
  }

  public static async updateProfile(username: string, id: string) {
    try {
      return await prisma.user.update({
        where: { id },
        data: { username },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return null;
      }
      throw error;
    }
  }

  public static async updatePassword(hashedPassword: string, id: string) {
    try {
      return await prisma.user.update({
        where: { id },
        data: { password: hashedPassword },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return null;
      }
      throw error;
    }
  }
}

export default UserModel;
