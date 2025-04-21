"use client";

import { useState } from "react";
import Search from "./search";
import { products } from "../../lib/placeholder-data";
import ProductCard from "./table";

export default function KelolaInformasiBarangPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ml-32 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 flex justify-center">
      <div className="w-full max-w-[1070px] bg-white rounded-2xl p-6">
        {/* Search */}
        <div className="mb-4 flex justify-center">
          <Search onSearch={setSearch} />
        </div>

        {/* Teks hasil pencarian */}
        <p className="text-sm text-gray-500 mb-4 text-center">
          Menampilkan hasil pencarian untuk:{" "}
          <span className="font-semibold">
            {search.trim() === "" ? "Semua Barang" : search}
          </span>
        </p>

        {/* Daftar hasil */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-400">
            Tidak ada barang ditemukan.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                priceOriginal={product.priceOriginal}
                priceDiscount={product.priceDiscount}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
