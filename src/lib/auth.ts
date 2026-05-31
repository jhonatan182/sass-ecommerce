import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import prisma from "./prisma";
import console from "console";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    autoSignIn: false,
    customSyntheticUser: ({ coreFields, additionalFields, id }) => {
      console.log({ coreFields, additionalFields, id });

      return {
        ...coreFields,
        ...additionalFields,
        id,
      };
    },
  },

  plugins: [nextCookies()],
});
