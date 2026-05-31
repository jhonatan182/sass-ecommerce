import { createAuthClient } from "better-auth/react";

export const { signOut, useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});
