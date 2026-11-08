import mongoose from "mongoose";

type UserJwtPayloadType = {
  _id: mongoose.Types.ObjectId;
};

type UserType = UserJwtPayloadType & {
  username: string;
  password: string;
  added_at: Date;
  __v: number;
};

export type { UserType, UserJwtPayloadType };
