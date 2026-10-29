import * as z from "zod";
import { todoIdValidator } from "../../zod_validation_utils.js";

const todoParamsValidator = z.strictObject({
  todo_id: todoIdValidator,
});

type todoIdDto = z.infer<typeof todoParamsValidator>;

export type { todoIdDto };

export default todoParamsValidator;
