import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
console.log(SALT_ROUNDS);
const hashPassword = async (password: string) => {
  const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);
  return hashed_password;
};

const comparePasswords = async (
  user_password: string,
  database_password: string,
) => {
  const is_match = await bcrypt.compare(user_password, database_password);
  return is_match;
};

const startProgram = async () => {
  const hashed_password: string = await hashPassword("123");
  console.log(hashed_password);

  const result_back = await comparePasswords("123", hashed_password);
  console.log(result_back);
};

startProgram();
