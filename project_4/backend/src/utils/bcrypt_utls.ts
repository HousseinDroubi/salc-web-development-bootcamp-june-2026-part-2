import bcrypt from "bcrypt";

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;

class BcryptUtils {
  public static async hashPassword(password: string) {
    const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);
    return hashed_password;
  }

  public static async comparePasswords(
    user_password: string,
    database_password: string,
  ) {
    const is_match = await bcrypt.compare(user_password, database_password);
    return is_match;
  }
}

export default BcryptUtils;
