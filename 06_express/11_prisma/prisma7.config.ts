import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma", // Tells Prisma: "Here is where my database blueprint lives."

  migrations: {
    path: "prisma/migrations", // Tells Prisma: "Save the history log of my database changes in this folder."
  },
  datasource: {
    // Tells Prisma: "Here is the secret address/password to connect to the actual database server."
    url: process.env.DATABASE_URL || "",
  },
});
