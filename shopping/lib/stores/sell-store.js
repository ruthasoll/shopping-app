"use client";

import { createContext, useContext, useState } from "react";

const SellStoreContext = createContext(null);

export function SellStoreProvider({ children }) {
  const [draft, setDraft] = useState({ title: "", description: "", price: 0, imageUrl: "" });

  const update = (patch) => setDraft((d) => ({ ...d, ...patch }));
  const reset = () => setDraft({ title: "", description: "", price: 0, imageUrl: "" });

  return (
    <SellStoreContext.Provider value={{ draft, update, reset }}>
      {children}
    </SellStoreContext.Provider>
  );
}

export const useSellStore = () => {
  const ctx = useContext(SellStoreContext);
  if (!ctx) throw new Error("useSellStore must be used within SellStoreProvider");
  return ctx;
};
