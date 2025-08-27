"use client";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-gray-200 text-center text-gray-600">
      <div className="flex justify-center gap-6 mb-2">
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className="flex justify-center gap-4 text-xl font-medium">
        <FaFacebook />
        <FaTwitter />
      </div>
    </footer>
  );
}
