import * as z from "zod";

// Coercion
// To coerce input data to the appropriate type, use z.coerce instead:

const Validator = z.object({
  x1: z.coerce.string(), // x1 will be converted to string if possible -> String(x1)
  x2: z.coerce.number(), // x2 will be converted to number if possible -> Number(x2)
  x3: z.coerce.boolean(), // x3 must be converted to boolean if possible -> Boolean(x3)
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "abc",
  x2: 123,
  x3: true,
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
