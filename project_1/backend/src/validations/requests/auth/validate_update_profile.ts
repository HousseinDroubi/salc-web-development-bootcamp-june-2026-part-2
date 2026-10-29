import * as z from "zod";
import { usernameValidator } from "../../zod_validation_utils.js";

const updateProfileValidator = z.strictObject({
  username: usernameValidator,
  id: z.number(),
});

type updateProfileDto = z.infer<typeof updateProfileValidator>;

export type { updateProfileDto };

export default updateProfileValidator;
