import * as z from "zod";

// Nullish
// To make a schema nullish (both optional and nullable):

const Validator = z.object({
  x1: z.string().nullish(),
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "Abc", // string, null, undefined or not even existed will pass
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
