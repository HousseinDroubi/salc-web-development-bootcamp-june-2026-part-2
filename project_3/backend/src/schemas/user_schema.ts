import mongoose from "mongoose";
import { UserType } from "../types/user_types";

const user_schema = new mongoose.Schema<UserType>({
  username: {
    type: String,
    minLength: 3,
    maxLength: 10,
  },
  password: String,
  added_at: {
    type: Date,
    immutable: true,
    default: () => new Date(),
  },
});

const UserSchemaModel = mongoose.model<UserType>("users", user_schema);

export default UserSchemaModel;
