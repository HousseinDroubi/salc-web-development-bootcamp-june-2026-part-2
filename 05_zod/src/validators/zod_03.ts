import * as z from "zod";

const Validator = z.object({
  name: z.string(), // name must be string
});

const input = {
  name: "123",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
