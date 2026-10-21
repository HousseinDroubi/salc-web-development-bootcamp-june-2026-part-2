import * as z from "zod";

// Arrays
// To define an array schema:

const Validator = z.strictObject({
  x1: z.array(z.string()), // x1 must be array of type string.
  x2: z.array(z.string()).nonempty(), // must contain at least 1 item
  x3: z.array(z.string()).min(5), // must contain 5 or more items
  x4: z.array(z.string()).max(5), // must contain 5 or fewer items
  x5: z.array(z.string()).length(5), // must contain 5 items exactly
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: ["abc", "efg"],
  x2: ["Abc"],
  x3: ["a", "b", "c", "d", "e", "f"],
  x4: ["a", "b", "c", "d"],
  x5: ["a", "b", "c", "d", "e"],
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
