import * as z from "zod";

// Nullables
// To make a schema nullable (that is, to allow null inputs).

const Validator = z.object({
  x1: z.string().nullable(),
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: null, // string or null will only pass
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
