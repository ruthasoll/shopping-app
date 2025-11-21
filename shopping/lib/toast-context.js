"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((toast) => {
    const id = Math.random().toString(36).slice(2, 9);
    const t = { id, ...toast };
    setToasts((s) => [...s, t]);
    // auto-dismiss
    setTimeout(() => {
      setToasts((s) => s.filter((x) => x.id !== id));
    }, toast.duration ?? 3000);
    return id;
  }, []);

  const remove = useCallback((id) => setToasts((s) => s.filter((x) => x.id !== id)), []);

  return (
    <ToastContext.Provider value={{ push, remove }}>
      {children}
      <div aria-live="polite" className="fixed bottom-6 right-6 z-50 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-3 rounded-md shadow-md text-white ${
              t.type === "success" ? "bg-green-600" : t.type === "danger" ? "bg-red-600" : "bg-gray-800"
            }`}
          >
            <div className="flex items-center justify-between space-x-4">
              <div className="text-sm">{t.message}</div>
              <button onClick={() => remove(t.id)} className="text-white opacity-80 hover:opacity-100 ml-4">✕</button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};
