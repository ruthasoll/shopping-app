"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { signIn, signUP, signOut as signOutAction } from "./actions/auth-actions";

const STORAGE_KEY = "authUser";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  loading: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      if (typeof window === "undefined") return null;
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  }, [user]);

  const signInFn = async (email, password, callbackUrl) => {
    setLoading(true);
    try {
      const returned = await signIn(email, password, callbackUrl);
      const result = returned?.result ?? returned;
      const u = result?.user ?? returned?.user ?? result?.data?.user ?? null;
      if (u) setUser(u);
      return returned;
    } finally {
      setLoading(false);
    }
  };

  const signUpFn = async (name, email, password, callbackUrl) => {
    setLoading(true);
    try {
      const returned = await signUP(name, email, password, callbackUrl);
      const result = returned?.result ?? returned;
      const u = result?.user ?? returned?.user ?? result?.data?.user ?? null;
      if (u) setUser(u);
      return returned;
    } finally {
      setLoading(false);
    }
  };

  const signOutFn = async () => {
    setLoading(true);
    try {
      try {
        await signOutAction();
      } catch (e) {
        // ignore server-side sign out errors but still clear client state
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loading, signIn: signInFn, signUp: signUpFn, signOut: signOutFn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
