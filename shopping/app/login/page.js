"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Hardcoded credentials
  const hardcodedEmail = "user@example.com";
  const hardcodedPassword = "password123";

  const handleLogin = () => {
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Simulated user data
      const userData = { name: "John Doe" };

      // Store user data in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(userData));

      // Redirect to products page
      router.push("/products");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password123"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
        >
          Log in
        </button>
      </div>
    </div>
  );
}