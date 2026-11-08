import * as z from "zod";
import { usernameValidator } from "../../zod_validation_utils.js";

const updateProfileValidator = z.strictObject({
  username: usernameValidator,
  _id: z.string(),
});

type updateProfileDto = z.infer<typeof updateProfileValidator>;

export type { updateProfileDto };

export default updateProfileValidator;
