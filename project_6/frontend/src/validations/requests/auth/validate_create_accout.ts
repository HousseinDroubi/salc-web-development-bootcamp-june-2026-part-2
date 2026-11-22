import * as z from "zod";
import {
  confirmationPasswordValidator,
  passwordValidator,
  usernameValidator,
} from "../../zod_validation_utils.js";

// Todo
const CreateAccountValidator = z
  .strictObject({
    username: usernameValidator,
    password: passwordValidator,
    confirmationPassword: confirmationPasswordValidator,
  })
  .refine((data) => data.password === data.confirmationPassword, {
    error: "Password don't match",
    path: ["confirmationPassword"],
  });

type createAccountDto = z.infer<typeof CreateAccountValidator>;

export type { createAccountDto };

export default CreateAccountValidator;
