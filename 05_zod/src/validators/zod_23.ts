import * as z from "zod";

// Return custom error example 2

const Validator = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match!", // You can either specify error or message, and at the end result.error.issues[0]?.message will be the one specified
    path: ["confirmPassword"], // Attaches the error specifically to confirmPassword
  });

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  password: "123",
  confirmPassword: "123",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
