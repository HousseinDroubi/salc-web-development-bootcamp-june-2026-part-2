import * as z from "zod";

// Union
// Union types (A | B) represent a logical "OR". Zod union schemas will check the input against each option in order. The first value that validates successfully is returned.

const Validator = z.union([
  z.object({
    phone: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
]);

type MyType = z.infer<typeof Validator>;

// We can pass phone and/or name
const input: MyType = {
  phone: "abc",
  name: "Abc",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
