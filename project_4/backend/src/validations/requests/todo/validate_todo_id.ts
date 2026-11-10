import * as z from "zod";
import { todo_idValidator } from "../../zod_validation_utils.js";

const todoParamsValidator = z.strictObject({
  todo_id: todo_idValidator,
});

type todo_idDto = z.infer<typeof todoParamsValidator>;

export type { todo_idDto };

export default todoParamsValidator;
