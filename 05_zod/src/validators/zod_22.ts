import * as z from "zod";

// Refinements example 2
// .refine() is a custom rule-maker.
// Every Zod schema stores an array of refinements. Refinements are a way to perform custom validation that Zod doesn't provide a native API for.

const Validator = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match!",
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
