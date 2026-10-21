import * as z from "zod";

// Refinements example 1
// .refine() is a custom rule-maker.
// Every Zod schema stores an array of refinements. Refinements are a way to perform custom validation that Zod doesn't provide a native API for.

const Validator = z.object({
  number: z.number().refine(
    (val) => val % 2 === 0, // The rule: returns true if even, false if odd
    { message: "Number must be even!" }, // Custom error message if it fails
  ),
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  number: 4,
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
