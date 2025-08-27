"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react if not already

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded-sm" />
          <Link href="/" className="font-semibold text-lg">
            TechStore
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          {session ? (
            <>
              <Link href="/AddProduct">Add Product</Link>
              <button onClick={() => signOut()} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 gap-3 md:hidden text-gray-600 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          {session ? (
            <>
              <Link href="/AddProduct" onClick={() => setIsOpen(false)}>Add Product</Link>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="text-left hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
}
