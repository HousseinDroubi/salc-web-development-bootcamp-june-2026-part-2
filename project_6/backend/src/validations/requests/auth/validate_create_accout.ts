import * as z from "zod";
import {
  passwordValidator,
  usernameValidator,
} from "../../zod_validation_utils.js";

const loginAndCreateAccountValidator = z.strictObject({
  username: usernameValidator,
  password: passwordValidator,
});

type loginAndCreateAccountDto = z.infer<typeof loginAndCreateAccountValidator>;

export type { loginAndCreateAccountDto };

export default loginAndCreateAccountValidator;
