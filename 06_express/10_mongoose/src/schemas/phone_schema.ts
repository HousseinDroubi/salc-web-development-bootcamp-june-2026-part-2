import mongoose, { Schema } from "mongoose";

export interface IPhone {
  name: string;
  price: number;
  user_id: mongoose.Types.ObjectId;
}

const phone_schema = new Schema<IPhone>({
  name: {
    type: String,
    required: [true, "Phone name/model is required"],
    trim: true,
    minLength: [2, "Phone name must be at least 2 characters"],
    maxLength: [50, "Phone name cannot exceed 50 characters"],
  },
  price: {
    type: Number,
    required: [true, "Phone price is required"],
    min: [0, "Price cannot be negative"],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users", // Matches the User model collection name
    required: [true, "Each phone must belong to a user"],
    index: true,
  },
});

export const PhoneSchemaModel = mongoose.model<IPhone>("phones", phone_schema);

export default PhoneSchemaModel;
