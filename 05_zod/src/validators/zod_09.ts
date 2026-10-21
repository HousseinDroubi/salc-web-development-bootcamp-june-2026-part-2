import * as z from "zod";

// String formats
// To validate against some common string formats:

const Validator = z.object({
  x1: z.email(), // x1 must be a valid email, checkout out the documents how the regex is
  x2: z.ipv4(), // x2 must be a valid ipv4
  x3: z.ipv6(), // x3 must be a valid ipv6
  x4: z.mac(), // x4 must be a valid mac address
  x5: z.creditCard(), // x5 must be a valid mac address
  // check out more in the documents
});

type MyType = z.infer<typeof Validator>;

const input: MyType = {
  x1: "example@example.com",
  x2: "127.0.0.1",
  x3: "2001:db8:85a3::8a2e:370:7334",
  x4: "00:1A:2B:3C:4D:5E",
  x5: "4111-1111-1111-1111",
};

const result = Validator.safeParse(input);

if (!result.success) {
  console.log(result.error.issues[0]?.message);
}
