"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../lib/auth-context";

export default function NavBar() {
  const { user, isAuthenticated, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-xl font-semibold text-gray-900 ui-btn">
              <span className="text-indigo-600">Shop</span>
            </Link>
            <Link href="/products" className="text-sm ui-muted hover:text-gray-900">
              Store
            </Link>
            <Link href="/sell" className="text-sm ui-muted hover:text-gray-900">
              Sell
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {!isAuthenticated && (
              <Link href="/auth" className="text-sm text-indigo-600 ui-btn-primary ui-btn">
                Sign in
              </Link>
            )}

            {isAuthenticated && (
              <div className="relative">
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex items-center space-x-2 rounded-full px-3 py-1 hover:bg-gray-50"
                  aria-expanded={open}
                >
                  <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white uppercase text-sm">
                    {user?.name ? user.name.charAt(0) : "U"}
                  </div>
                  <div className="text-sm text-gray-800">{user?.name ?? user?.email}</div>
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
                    <div className="px-4 py-2 text-sm text-gray-700">{user?.email}</div>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</Link>
                    <button
                      onClick={async () => {
                        await signOut();
                        // local UI state will update via AuthProvider
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}



      {/* Navbar */}
    //   <nav className="bg-gradient-to-r from-blue-600 to-lightblue-400 shadow-lg">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between items-center h-16">
    //         <div className="flex-shrink-0">
    //           <Link href="/" className="text-white text-2xl font-bold">
    //             ShopHub
    //           </Link>
    //         </div>
    //         {/* Desktop Menu */}
    //         <div className="hidden md:flex space-x-4">
    //           <Link
    //             href="/products"
    //             className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
    //           >
    //             Products
    //           </Link>
    //           <Link
    //             href="/sell"
    //             className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
    //           >
    //             Sell
    //           </Link>
    //           <Link
    //             href="/auth" // Updated link to point to the auth page
    //             className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
    //           >
    //             Login
    //           </Link>
    //           {/* <Link
    //             href="/auth" // Updated link to point to the auth page
    //             className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition"
    //           >
    //             Signup
    //           </Link> */}
    //         </div>
    //         {/* Mobile Menu Button */}
    //         <div className="-mr-2 flex md:hidden">
    //           <button
    //             className="text-white hover:bg-blue-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
    //             onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
    //           >
    //             <span className="sr-only">Open main menu</span>
    //             <svg
    //               className="h-6 w-6"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M4 6h16M4 12h16m-7 6h7"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
