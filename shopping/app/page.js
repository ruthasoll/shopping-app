import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <>
     <h1 className="text-3xl font-bold underline text-blue-600">
      Hello world!

    </h1>
             <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition">
             ShopHub
           </Link>
          <div className="flex gap-2 sm:gap-4 items-center">
            <Link
              href="/products"
              className="px-3 sm:px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition font-medium"
            >
              Products
            </Link>
            <Link
              href="/sell"
              className="px-3 sm:px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition font-medium"
            >
              Sell
            </Link>

             <Link
              href="/login"
              className="px-3 sm:px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition font-medium"
            >
              login
            </Link>
             <Link
              href="/signup"
              className="px-3 sm:px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition font-medium"
            >
              Signup
            </Link>
             </div>
    </>
   
  )
 }
