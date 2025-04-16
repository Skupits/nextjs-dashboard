"use client";

import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TableTambahBarang({ id }: { id: string }) {
  const router = useRouter();

  useEffect(() => {
    console.log("Ambil data barang dengan id:", id);
  }, [id]);

  const handleCancel = () => {
    router.push("/dashboard/kelolaInformasiBarang");
  };

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    priceOriginal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Barang ditambahkan:", formData);
    setFormData({ id: "", title: "", priceOriginal: "" });
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-32 px-2">
        {/* Kiri: Label Kolom */}
        <div className="flex flex-col gap-6 justify-start pt-2">
          <div className="font-bold text-black">ID Barang</div>
          <div className="font-bold text-black">Nama Barang</div>
          <div className="font-bold text-black">Harga</div>
        </div>

        {/* Kanan: Input Form */}
        <div className="flex flex-col gap-4 w-full text-black">
          <input
            name="id"
            type="number"
            className="w-full border rounded px-3 py-2"
            placeholder="Masukkan ID Barang"
            value={formData.id}
            onChange={handleChange}
          />
          <input
            name="title"
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="Masukkan Nama Barang"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            name="priceOriginal"
            type="number"
            className="w-full border rounded px-3 py-2"
            placeholder="Masukkan Harga"
            value={formData.priceOriginal}
            onChange={handleChange}
          />

          <div className="flex gap-4 mt-2">
            <button
              onClick={handleCancel}
              className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded inline-flex items-center w-fit"
            >
              <X className="mr-2" size={16} />
              Batal
            </button>

            <button
              onClick={handleSubmit}
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded inline-flex items-center w-fit"
            >
              <Plus className="mr-2" size={16} />
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
