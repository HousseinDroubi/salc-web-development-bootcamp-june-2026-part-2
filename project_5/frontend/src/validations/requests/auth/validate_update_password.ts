import * as z from "zod";
import { passwordValidator } from "../../zod_validation_utils.js";

const updatePasswordValidator = z
  .strictObject({
    old_password: passwordValidator,
    new_password: passwordValidator,
    confirmation_password: passwordValidator,
  })
  .refine((data) => data.new_password === data.confirmation_password, {
    error: "Password don't match",
    path: ["confirmation_password"],
  });

type updatePasswordDto = z.infer<typeof updatePasswordValidator>;

export type { updatePasswordDto };

export default updatePasswordValidator;
