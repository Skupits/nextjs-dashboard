"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

interface inventory {
  id: number;
  stock: number;
  minStock: number;
  location: string;
  productsId: string;
}

interface TableProps {
  data: inventory[];
}

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border rounded-lg">
        <thead>
          <tr className="bg-white border-b text-black">
            <th className="p-4 font-bold ">Nama Barang</th>
            <th className="p-4 font-bold">Stock Minimum</th>
            <th className="p-4 font-bold">Stock Barang</th>
            <th className="p-4 font-bold">Location</th>
            <th className="p-4 font-bold text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((inventori) => (
            <tr key={inventori.id} className="border-b text-black">
              <td className="p-4">{inventori.productsId}</td>
              <td className="p-4">{inventori.minStock}</td>
              <td className="p-4">{inventori.stock}</td>
              <td className="p-4">{inventori.location}</td>
              <td className="p-4 flex justify-center gap-4">
                <Eye className="text-gray-600 cursor-pointer" />
                <Pencil className="text-gray-600 cursor-pointer" />
                <Trash2 className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
