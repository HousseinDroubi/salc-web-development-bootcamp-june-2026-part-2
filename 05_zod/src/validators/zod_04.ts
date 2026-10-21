import * as z from "zod";

const Validator = z.object({
  name: z.string(), // name must be string
  age: z.number(), // age must be number
});

// In this way, we easily extract the type of Validator, so it's reusable and we can export it as type
type MyType = z.infer<typeof Validator>;

const input: MyType = {
  name: "Houssein",
  age: 23,
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
