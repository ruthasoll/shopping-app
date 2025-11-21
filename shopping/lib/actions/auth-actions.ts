"use server";
// import {auth } from "../auth";
import { auth } from "../auth";

import { headers } from "next/headers";

export const signUP = async (name: string, email: string, password: string, callbackUrl?: string) => {
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });

  return { result, callbackUrl };
};

export const signIn = async (email: string, password: string, callbackUrl?: string) => {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  
  return { result, callbackUrl };
};

// export const signOut = async ()=>{
//     const result = await auth.api.signOut({headers:await headers()})
//     return result;
// }

export const signOut = async () => {
  try {
    const result = await auth.api.signOut({ headers: await headers() });
    return result;
  } catch (e) {
    // If sign out fails server-side, still allow client to clear auth state
    return { ok: false };
  }
};
