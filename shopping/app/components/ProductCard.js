"use client";

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <article className="ui-card p-4">
      <div className="h-48 w-full bg-gray-100 rounded-md mb-3 overflow-hidden flex items-center justify-center">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.title} className="object-cover h-full w-full" />
        ) : (
          <div className="text-muted">No image</div>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      <p className="text-sm ui-muted mb-3">{product.description}</p>
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
        <button className="ui-btn ui-btn-primary">Buy</button>
      </div>
    </article>
  );
}
