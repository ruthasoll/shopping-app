import { betterAuth } from "better-auth";
const { prismaAdapter } = require("better-auth/adapters/prisma");
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "../src/generated/prisma";
import { nextCookies } from "better-auth/next-js";

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});

// If your Prisma file is located elsewhere, you can change the path
