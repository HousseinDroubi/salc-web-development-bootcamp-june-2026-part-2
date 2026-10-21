import * as z from "zod";

// Optionals
// To make a schema optional (that is, to allow undefined inputs).

const Validator = z.object({
  x1: z.string().optional(),
  x2: z.string().exactOptional(),
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: undefined, // string or undefined or not even existed will pass
  x2: "abc", // string or not existed are only pass
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
