import * as z from "zod";

// Enums
// Use z.enum to validate inputs against a fixed set of allowable string values.
// enums is only for strings
// Checkout more about enums in documentation

const Validator = z.object({
  x1: z.enum(["Salmon", "Tuna", "Trout"] as const),
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "Tuna",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
