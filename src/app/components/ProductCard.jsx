"use client";

import Link from "next/link";

export default function ProductCard({id, title, price, image }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition w-60">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md " />
      <h3 className="mt-4 text-lg font-semibold text-center">{title}</h3>
      <p className="text-gray-600 text-center">{price}</p>
      <Link href={`/products/${id}`}>
        <button className="mt-4 w-full font-medium text-gray-600 border border-gray-200 rounded-md py-2 hover:bg-gray-100">
          View Details
        </button>
      </Link>
    </div>
  );
}
