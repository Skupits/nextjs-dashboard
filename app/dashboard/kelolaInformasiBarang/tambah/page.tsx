"use client";

import Table from "./table"; 

export default function Page() {
  return (
    <div className="ml-32 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 flex justify-center">
      <div className="w-full max-w-[1070px] bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-black text-2xl sm:text-3xl font-bold mb-8">
            Tambah Barang
          </h1>
        </div>
        <Table/>
      </div>
    </div>
  );
}
