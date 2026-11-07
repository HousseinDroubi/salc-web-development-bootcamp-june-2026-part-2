import mongoose, {
  Model,
  type HydratedDocument,
  type QueryWithHelpers,
  type ValidatorProps,
} from "mongoose";

// 1. Raw document attributes
export interface IUser {
  name?: string;
  age?: number;
  hourly_pay: number;
  email: string;
  added_at: Date;
  updated_at: Date;
  supervisor_id?: mongoose.Types.ObjectId;
  skills: string[];
  address?: {
    country?: string;
    region?: string;
  };
}

// 2. Instance methods
export interface IUserMethods {
  sayHi(): void;
}

// Helper type for a fully hydrated user document with methods
export type UserDocument = HydratedDocument<IUser, IUserMethods>;

// 3. Query helpers
export interface IUserQueryHelpers {
  byName(
    this: QueryWithHelpers<any, any, IUserQueryHelpers>,
    name: string,
  ): QueryWithHelpers<any, any, IUserQueryHelpers>;
}

// 4. Static Model interface
// Model<RawDocType, TQueryHelpers, TMethods>
export interface IUserModel extends Model<
  IUser,
  IUserQueryHelpers,
  IUserMethods
> {
  findByName(
    name: string,
  ): QueryWithHelpers<UserDocument[], UserDocument, IUserQueryHelpers>;
}

const address_schema = new mongoose.Schema({
  country: {
    type: String,
    uppercase: true,
  },
  region: String,
});

// Generic order for Schema: Schema<DocType, ModelType, InstanceMethods, QueryHelpers>
const user_schema = new mongoose.Schema<
  IUser,
  IUserModel,
  IUserMethods,
  IUserQueryHelpers
>({
  name: {
    type: String,
    minLength: 3,
    max: 20,
  },
  age: {
    type: Number,
    min: 18,
    max: 200,
  },
  hourly_pay: {
    type: Number,
    required: true,
    validate: {
      validator: (v: number) => v >= 12 && v % 2 === 0,
      message: (props: ValidatorProps) =>
        `${props.value} must be greater than 11 and even`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  added_at: {
    type: Date,
    immutable: true,
    default: () => new Date(),
  },
  updated_at: {
    type: Date,
    default: () => new Date(),
  },
  supervisor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  skills: [String],
  address: address_schema,
});

// Instance method implementation
user_schema.methods.sayHi = function (this: UserDocument) {
  console.log(`Hi my name is ${this.name}`);
};

// Static method implementation
user_schema.statics.findByName = function (this: IUserModel, name: string) {
  return this.find({ name: new RegExp(name, "i") });
};

// Query helper implementation
user_schema.query.byName = function (
  this: QueryWithHelpers<any, UserDocument, IUserQueryHelpers>,
  name: string,
) {
  return this.where({ name: new RegExp(name, "i") });
};

// Middlewares
user_schema.pre("save", function () {
  this.updated_at = new Date();
});

user_schema.post("save", function (doc: UserDocument) {
  doc.sayHi();
});

// Crucial: Type the model with <IUser, IUserModel, IUserQueryHelpers>
const UserSchemaModel = mongoose.model<IUser, IUserModel, IUserQueryHelpers>(
  "users",
  user_schema,
);

export default UserSchemaModel;
