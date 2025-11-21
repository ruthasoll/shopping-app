"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* Mobile Menu */}
      <div className="md:hidden bg-blue-600 p-4 hidden" id="mobile-menu">
        <Link href="/products" className="block text-white py-2">
          Products
        </Link>
        <Link href="/sell" className="block text-white py-2">
          Sell
        </Link>
        <Link href="/auth" className="block text-white py-2">
          Login
        </Link>
        {/* <Link href="/auth" className="block text-white py-2">
          Signup
        </Link> */}
      </div>

      {/* Main Content */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold underline text-blue-600 mb-4">
          Hello world!
        </h1>
        <p className="text-lg text-gray-700">Welcome to ShopHub!</p>
      </div>
    </>
  );
}

