import * as z from "zod";
import {
  passwordValidator,
  usernameValidator,
} from "../../zod_validation_utils.js";

const loginAccountValidator = z.strictObject({
  username: usernameValidator,
  password: passwordValidator,
});

type loginDto = z.infer<typeof loginAccountValidator>;

export type { loginDto };

export default loginAccountValidator;
