import * as z from "zod";

// Template literals
// Introduced in zod@4.0

const Validator = z.object({
  x1: z.templateLiteral(["hello"]),
  x2: z.templateLiteral(["hello, ", z.string(), "!"]),
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "hello",
  x2: "hello, there !",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
