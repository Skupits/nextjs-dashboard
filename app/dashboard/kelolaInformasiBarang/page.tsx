"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiPlusCircle } from "react-icons/fi";
import Search from "../search";
import Table from "./table";
import { products } from "../../../lib/placeholder-data";

export default function KelolaInformasiBarangPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ml-32 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 flex justify-center">
      <div className="w-full max-w-[1070px] bg-white rounded-2xl p-6">
        {/* Header: Judul dan Search */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-black text-2xl sm:text-3xl font-bold">
            Daftar Semua Barang
          </h1>
          <div className="flex items-center gap-4">
            <Search onSearch={setSearch} />
            <button
              className="text-green-700 hover:text-green-900 text-3xl cursor-pointer"
              title="Tambah Barang"
              onClick={() => {
                router.push("/dashboard/kelolaInformasiBarang/tambah");
              }}
            >
              <FiPlusCircle />
            </button>
          </div>
        </div>

        {/* Table */}
        <Table data={filteredData} />
      </div>
    </div>
  );
}

