import * as z from "zod";

// z.strictObject
// To define a strict schema that throws an error when unknown keys are found:

const Validator = z.strictObject({
  x1: z.string().nullish(),
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "Abc", // string, null, undefined or not even existed will pass
  // x2: "Abc", // this will fail
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
