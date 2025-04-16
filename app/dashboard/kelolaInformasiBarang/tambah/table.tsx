// "use client";

// import { useState } from "react";
// import { Plus } from "lucide-react";

// export default function TableTambahBarang() {
//   const [formData, setFormData] = useState({
//     id: "",
//     title: "",
//     priceOriginal: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     // Validasi atau kirim data ke backend di sini
//     console.log("Barang ditambahkan:", formData);
//     // Reset form jika perlu
//     setFormData({ id: "", title: "", priceOriginal: "" });
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full text-left border rounded-lg">
//         <thead>
//           <tr className="bg-white border-b text-black">
//             <th className="p-4 font-bold">ID Barang</th>
//             <th className="p-4 font-bold">Nama Barang</th>
//             <th className="p-4 font-bold">Harga</th>
//             <th className="p-4 font-bold text-center">Aksi</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b text-black">
//             <td className="p-4">
//               <input
//                 name="id"
//                 type="number"
//                 className="w-full border rounded px-2 py-1"
//                 value={formData.id}
//                 onChange={handleChange}
//                 placeholder="ID"
//               />
//             </td>
//             <td className="p-4">
//               <input
//                 name="title"
//                 type="text"
//                 className="w-full border rounded px-2 py-1"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="Nama Barang"
//               />
//             </td>
//             <td className="p-4">
//               <input
//                 name="priceOriginal"
//                 type="number"
//                 className="w-full border rounded px-2 py-1"
//                 value={formData.priceOriginal}
//                 onChange={handleChange}
//                 placeholder="Harga"
//               />
//             </td>
//             <td className="p-4 text-center">
//               <button
//                 onClick={handleSubmit}
//                 className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded inline-flex items-center"
//               >
//                 <Plus className="mr-2" size={16} />
//                 Simpan
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TableTambahBarang() {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/dashboard/kelolaInformasiBarang"); // ganti dengan route tujuan kamu
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
