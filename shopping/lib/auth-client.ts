import { createAuthClient } from "better-auth/react";

// Point the auth client at the Next.js API route implemented by `lib/auth` (+ `app/api/auth/[...all]/route.ts`).
// This enables `authClient.signUp.email(...)` and `authClient.signIn.email(...)` to call the server-side
// Better Auth handlers. If your app runs on a different base path, update `baseURL` accordingly.
export const authClient = createAuthClient({
});