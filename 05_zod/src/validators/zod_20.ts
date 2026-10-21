import * as z from "zod";

// Exclusive unions (XOR)
// An exclusive union (XOR) is a union where exactly one option must match. Unlike regular unions that succeed when any option matches, z.xor() fails if zero options match OR if multiple options match.

const Validator = z.xor([
  z.object({
    phone: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
]);

type MyType = z.infer<typeof Validator>;

// We can pass phone or name but not both
const input: MyType = {
  phone: "abc",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
