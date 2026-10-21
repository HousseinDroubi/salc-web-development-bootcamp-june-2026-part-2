import * as z from "zod";

const Validator = z.string();

const name = 123;

// safeParse will not throw an error, it will return an object that contains result.success of type boolean: false means validations didn't match, true means it matches
const result = Validator.safeParse(name);
if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
