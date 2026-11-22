import * as z from "zod";
import { todoTitleValidator } from "../../zod_validation_utils.js";

const todoBodyValidator = z.strictObject({
  title: todoTitleValidator,
  id: z.string(),
});

type todoBodyDto = z.infer<typeof todoBodyValidator>;

export type { todoBodyDto };

export default todoBodyValidator;
