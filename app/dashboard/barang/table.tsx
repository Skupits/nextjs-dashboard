"use client";

import Image from "next/image";
import {Star } from "lucide-react";
import { formatPrice } from "../../../lib/FormatPrice";

interface ProductCardProps {
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceOriginal: number;
  priceDiscount: number;
}

export default function ProductCard({
  title,
  image,
  rating,
  reviewCount,
  priceOriginal,
  priceDiscount,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[4/3] bg-gray-50">
        <Image src={image} alt={title} fill className="object-contain p-4" />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-yellow-500 mt-1 text-sm">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span>{rating.toFixed(1)}</span>
          <span className="text-gray-400 ml-1">({reviewCount})</span>
        </div>

        <div className="mt-2">
          <p className="text-gray-500 text-sm line-through">
            {formatPrice(priceOriginal)}
          </p>
          <p className="text-lg font-bold text-red-600">
            {formatPrice(priceDiscount)}
          </p>
        </div>

        <button className="mt-4 bg-black text-white text-sm py-2 rounded-xl hover:bg-gray-800 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
