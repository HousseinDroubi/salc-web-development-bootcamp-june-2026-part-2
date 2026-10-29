import * as z from "zod";
import { passwordValidator } from "../../zod_validation_utils.js";

const updatePasswordValidator = z.strictObject({
  old_password: passwordValidator,
  new_password: passwordValidator,
  id: z.number(),
});

type updatePasswordDto = z.infer<typeof updatePasswordValidator>;

export type { updatePasswordDto };

export default updatePasswordValidator;
