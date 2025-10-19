"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate user login check
    const userData = sessionStorage.getItem("user");
    if (!userData) {
      router.push("/"); // Redirect to login if not logged in
      return;
    }

    setUser(JSON.parse(userData));

    // Dummy product data
    const dummyProducts = [
      {
        id: 1,
        title: "Product One",
        description: "This is a great product.",
        price: 29.99,
        sellerName: "Seller One",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Product Two",
        description: "This product is amazing.",
        price: 39.99,
        sellerName: "Seller Two",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Product Three",
        description: "You will love this product.",
        price: 49.99,
        sellerName: "Seller Three",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        title: "Product Four",
        description: "Best product in the market.",
        price: 59.99,
        sellerName: "Seller Four",
        image: "https://via.placeholder.com/150",
      },
    ];

    // Simulate loading products
    setTimeout(() => {
      setProducts(dummyProducts);
      setLoading(false);
    }, 500);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin mx-auto mb-4"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-300 bg-gradient-to-r from-blue-600 to-lightblue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">ShopHub</Link>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-white">Welcome, {user?.name}</span>
            <Link href="/sell" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:opacity-90 transition">Sell Product</Link>
            <button
              onClick={() => {
                sessionStorage.removeItem("user");
                router.push("/");
              }}
              className="px-4 py-2 text-white hover:text-blue-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Available Products</h1>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No products available yet</p>
            <Link
              href="/sell"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition"
            >
              Be the first to sell
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <span className="text-xs text-gray-500">by {product.sellerName}</span>
                  </div>
                  <Link
                    href={`/checkout/${product.id}`}
                    className="w-full block text-center py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition font-semibold"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}