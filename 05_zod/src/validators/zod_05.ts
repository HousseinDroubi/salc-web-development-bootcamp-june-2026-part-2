import * as z from "zod";

const Validator = z.object({
  x1: z.string(), // x1 must be a string
  x2: z.number(), // x2 must be a number
  x3: z.boolean(), // x3 must be a boolean
  x4: z.undefined(), // x4 must be a undefined
  x5: z.null(), // x5 must be a null
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "abc",
  x2: 123,
  x3: true,
  x4: undefined,
  x5: null,
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
