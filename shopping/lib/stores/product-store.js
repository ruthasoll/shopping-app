"use client";

import { createContext, useContext, useState } from "react";

const ProductStoreContext = createContext(null);

export function ProductStoreProvider({ children, initial = [] }) {
  const [products, setProducts] = useState(initial);

  const addProduct = (p) => setProducts((s) => [...s, p]);
  const removeProduct = (id) => setProducts((s) => s.filter((x) => x.id !== id));
  const clear = () => setProducts([]);

  return (
    <ProductStoreContext.Provider value={{ products, addProduct, removeProduct, clear }}>
      {children}
    </ProductStoreContext.Provider>
  );
}

export const useProductStore = () => {
  const ctx = useContext(ProductStoreContext);
  if (!ctx) throw new Error("useProductStore must be used within ProductStoreProvider");
  return ctx;
};
