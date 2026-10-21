import * as z from "zod";

// Numbers
// Use z.number() to validate numbers. It allows any finite number.

const Validator = z.object({
  x1: z.number().gt(5), // greater than 5
  x2: z.number().gte(5), // greater than or equal to 5
  x3: z.number().lt(5), // less than 5
  x4: z.number().lte(5), // // greater than or equal to 5
  x5: z.number().positive(), // positive
  x6: z.number().nonnegative(), // not negative - positive
  x7: z.number().negative(), // negative
  x8: z.number().nonpositive(), // not positive
  x9: z.number().multipleOf(5), // must be 5, 10, 15 ....
});

// In this way, we easily extract the type of User, so it's reusable and we can export it as type
type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: 6,
  x2: 5,
  x3: 4,
  x4: 5,
  x5: 23,
  x6: 23,
  x7: -2,
  x8: -2,
  x9: 25,
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
