"use client";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../../lib/stores/product-store";

export default function ProductsPage() {
  // Use the product store; fallback to demo products when empty
  const { products } = useProductStore();

  const demo = products.length
    ? products
    : [
        {
          id: "p1",
          title: "Product One",
          description: "This is a great product for demos.",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/600x400",
        },
        {
          id: "p2",
          title: "Product Two",
          description: "Another fantastic item to try out.",
          price: 39.99,
          imageUrl: "https://via.placeholder.com/600x400",
        },
      ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demo.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}