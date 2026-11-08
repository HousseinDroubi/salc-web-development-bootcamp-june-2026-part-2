import mongoose from "mongoose";

type TodoType = {
  _id: mongoose.Types.ObjectId;
  title: string;
  added_at: Date;
  user_id: mongoose.Types.ObjectId;
};

export type { TodoType };
