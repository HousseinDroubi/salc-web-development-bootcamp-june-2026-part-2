import mongoose, { Schema } from "mongoose";

const phone_schema = new Schema({
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
  },
});

export const PhoneSchemaModel = mongoose.model("phones", phone_schema);

export default PhoneSchemaModel;
