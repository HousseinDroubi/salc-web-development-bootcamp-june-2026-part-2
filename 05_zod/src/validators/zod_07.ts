import * as z from "zod";

// Literals
// Literal schemas represent a literal type, like "hello world" or 5.

const Validator = z.object({
  x1: z.literal("something"), // x1 must be "something"
  x2: z.literal(12), // x2 must be 12
  x3: z.literal(true), // x3 must be true
  x4: z.literal([1, "2", true]), // x3 must be 1 or "2" or true
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "something",
  x2: 12,
  x3: true,
  x4: 1,
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
