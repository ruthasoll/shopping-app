"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-lightblue-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-2xl font-bold">
                ShopHub
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/products"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Products
              </Link>
              <Link
                href="/sell"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Sell
              </Link>
              <Link
                href="/login"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Signup
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                className="text-white hover:bg-blue-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden bg-blue-600 p-4 hidden" id="mobile-menu">
        <Link href="/products" className="block text-white py-2">
          Products
        </Link>
        <Link href="/sell" className="block text-white py-2">
          Sell
        </Link>
        <Link href="/login" className="block text-white py-2">
          Login
        </Link>
        <Link href="/signup" className="block text-white py-2">
          Signup
        </Link>
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