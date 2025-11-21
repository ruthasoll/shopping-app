"use client";

import { useSellStore } from "../../lib/stores/sell-store";
import { useToast } from "../../lib/toast-context";
import { useAuth } from "../../lib/auth-context";

export default function SellPage() {
  const { draft, update, reset } = useSellStore();
  const { push } = useToast();
  const { user, isAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      push({ type: 'danger', message: 'Please sign in to sell' });
      return;
    }
    // For now just pretend to submit and reset
    push({ type: 'success', message: 'Product listed (demo)' });
    reset();
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">Sell an item</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input required value={draft.title} onChange={(e)=>update({title:e.target.value})} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea required value={draft.description} onChange={(e)=>update({description:e.target.value})} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price (USD)</label>
          <input required type="number" step="0.01" value={draft.price} onChange={(e)=>update({price:parseFloat(e.target.value)||0})} className="w-40 px-3 py-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input value={draft.imageUrl} onChange={(e)=>update({imageUrl:e.target.value})} className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="flex items-center space-x-3">
          <button type="submit" className="ui-btn ui-btn-primary">List product</button>
          <button type="button" onClick={reset} className="ui-btn">Reset</button>
        </div>
      </form>
    </div>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Sell() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     image: "",
//   });
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const userData = sessionStorage.getItem("user");
//     if (!userData) {
//       router.push("/");
//       return;
//     }
//     setUser(JSON.parse(userData));
//   }, [router]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prev) => ({
//           ...prev,
//           image: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     // Validation
//     if (!formData.title || !formData.description || !formData.price) {
//       setError("All fields are required");
//       setLoading(false);
//       return;
//     }

//     if (isNaN(formData.price) || Number.parseFloat(formData.price) <= 0) {
//       setError("Price must be a valid positive number");
//       setLoading(false);
//       return;
//     }

//     try {
//       const newProduct = {
//         id: Date.now(),
//         title: formData.title,
//         description: formData.description,
//         price: Number.parseFloat(formData.price),
//         image: formData.image,
//         sellerId: user.id,
//         sellerName: user.name,
//         sellerEmail: user.email,
//         createdAt: new Date().toISOString(),
//       };

//       const products = JSON.parse(sessionStorage.getItem("products") || "[]");
//       products.push(newProduct);
//       sessionStorage.setItem("products", JSON.stringify(products));

//       setSuccess(true);
//       setFormData({ title: "", description: "", price: "", image: "" });

//       setTimeout(() => {
//         router.push("/products");
//       }, 2000);
//     } catch (err) {
//       setError("Failed to create product. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <div className="h-12 w-12 rounded-full border-4 border-muted border-t-primary mx-auto mb-4"></div>
//           <p className="text-gray-700">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation */}
//       <nav className="border-b border-gray-300 bg-gradient-to-r from-blue-600 to-lightblue-400">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold text-white">
//             ShopHub
//           </Link>
//           <div className="flex gap-4 items-center">
//             <Link href="/products" className="px-4 py-2 text-white hover:text-blue-200 transition">
//               Browse Products
//             </Link>
//             <button
//               onClick={() => {
//                 sessionStorage.removeItem("user");
//                 router.push("/");
//               }}
//               className="px-4 py-2 text-white hover:text-blue-200 transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Sell Form */}
//       <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Product</h1>

//         {success && (
//           <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg">
//             <p className="text-green-600 font-semibold">Product created successfully! Redirecting...</p>
//           </div>
//         )}

//         {error && (
//           <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg">
//             <p className="text-red-600">{error}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Product Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="e.g., Vintage Leather Jacket"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Describe your product in detail..."
//               rows="5"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="0.00"
//               step="0.01"
//               min="0"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {formData.image && (
//               <div className="mt-4">
//                 <p className="text-sm text-gray-500 mb-2">Preview:</p>
//                 <img
//                   src={formData.image}
//                   alt="Preview"
//                   className="w-32 h-32 object-cover rounded-lg"
//                 />
//               </div>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition disabled:opacity-50"
//           >
//             {loading ? "Creating Product..." : "Create Product"}
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }