import * as z from "zod";

const Validator = z.string();

const name = 123;

try {
  // parse might throw an error if the validator didn't match, so we use try/catch
  Validator.parse(name);
} catch (error) {
  if (error instanceof z.ZodError) {
    // Zod returns an array because a single input can fail validation in multiple places at the exact same time.

    // If you pass an object with several incorrect fields, Zod collects all of those failures so you can see every single problem at once rather than failing on the first one and stopping.
    console.log(error.issues[0]?.message);
  }
}
