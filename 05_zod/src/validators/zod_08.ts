import * as z from "zod";

// Strings
// Zod provides a handful of built-in string validation and transform APIs. To perform some common string validations:

const Validator = z.object({
  x1: z.string().max(5), // string and maximum 5 characters
  x2: z.string().min(5), // string and minimum 5 characters
  x3: z.string().length(5), // string and exactly 5 characters
  x4: z.string().nonempty(), // alias for .min(1)
  x5: z.string().regex(/^[a-z]+$/), // Pass a specific regex
  // / and /: The opening and closing delimiters of the regular expression.
  // ^: Asserts the start of the string. It ensures that the match must begin at the very first character.
  // [...]: A character set. It matches any single character that is listed inside the brackets.
  // a-z: A range inside the character set. It matches any lowercase letter from a to z.
  // + : A quantifier meaning "one or more" of the preceding element (meaning it needs at least one lowercase letter, but can have many).
  // $: Asserts the end of the string. Combined with ^ at the beginning, this ensures the entire string must match the pattern, from start to finish.
  x6: z.string().startsWith("aaa"), // must start with "aaa"
  x7: z.string().endsWith("zzz"), // must end with "zzz"
  x8: z.string().includes("---"), // must include "---"
  x9: z.string().uppercase(), // must be uppercase
  x10: z.string().lowercase(), // must be lowercase
  x11: z.string().trim(), // trim whitespace
  x12: z.string().toLowerCase(), // toLowerCase
  x13: z.string().toUpperCase(), // toUpperCase
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "abcde",
  x2: "abcde",
  x3: "abcde",
  x4: "a",
  x5: "abc",
  x6: "aaabc",
  x7: "aaazzz",
  x8: "abc---def",
  x9: "ABC",
  x10: "abc",
  x11: " abc ",
  x12: "ABC",
  x13: "abc",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
