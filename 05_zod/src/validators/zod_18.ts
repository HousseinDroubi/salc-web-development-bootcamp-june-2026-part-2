import * as z from "zod";

// Tuples
// Unlike arrays, tuples are typically fixed-length arrays that specify different schemas for each index.

const Validator = z.object({
  x1: z.tuple([z.string(), z.number(), z.boolean()]), // 1st element is string, 2nd is number and 3rd is boolean
  x2: z.tuple([z.string()], z.number()), // To add a variadic ("rest") argument:
  x3: z.tuple([z.string(), z.number()]).partial(), // To make every element optional:
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: ["abc", 12, true],
  x2: ["abc", 12, 23, 23],
  x3: [],
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
