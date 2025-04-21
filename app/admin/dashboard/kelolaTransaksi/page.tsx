"use client";

import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Search from "../search";
import Table from "./table";
import { transactions, products } from "../../../lib/placeholder-data";

export default function KelolaTransaksiPage() {
  const [search, setSearch] = useState("");

  const mappedTransactions = transactions
    .map((trx) => {
      const productNames = trx.items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          return product?.title || "Produk tidak ditemukan";
        })
        .join(", ");

      return {
        id: trx.id,
        items: productNames,
        status: trx.status,
        total: trx.total,
      };
    })
    .filter(
      (trx) =>
        trx.items.toLowerCase().includes(search.toLowerCase()) ||
        trx.status.toLowerCase().includes(search.toLowerCase()) ||
        trx.id.toString().includes(search)
    );

  return (
    <div className="ml-32 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 flex justify-center">
      <div className="w-full max-w-[1070px] bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-black text-2xl sm:text-3xl font-bold">
            Daftar Transaksi Barang
          </h1>
          <div className="flex items-center gap-4">
            <Search onSearch={setSearch} />
            <button
              className="text-green-700 hover:text-green-900 text-3xl cursor-pointer"
              title="Tambah Barang"
              onClick={() => {
                alert("Tambah Barang diklik!");
              }}
            >
              <FiPlusCircle />
            </button>
          </div>
        </div>
        <Table data={mappedTransactions} />
      </div>
    </div>
  );
}
