import * as z from "zod";

// Defaults
// To set a default value for a schema:

const Validator = z.object({
  x1: z.optional(z.string().default("abc")), // will be considered as "abc" if sent as undefined or not sent
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  // now x1 will be considered as "abc"
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
