"use client";

import { Eye, Pencil } from "lucide-react";
import { formatPrice } from "../../../lib/FormatPrice";

interface TableItem {
  id: number;
  items: string; 
  status: string;
  total: number;
}

interface TableProps {
  data: TableItem[];
}

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border rounded-lg">
        <thead>
          <tr className="bg-white border-b text-black">
            <th className="p-4 font-bold">ID Barang</th>
            <th className="p-4 font-bold">Nama Barang</th>
            <th className="p-4 font-bold">Harga</th>
            <th className="p-4 font-bold">Status</th>
            <th className="p-4 font-bold text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaksi) => (
            <tr key={transaksi.id} className="border-b text-black">
              <td className="p-4">{transaksi.id}</td>
              <td className="p-4">{transaksi.items}</td>
              <td className="p-4">
                {formatPrice(transaksi.total)}
              </td>
              <td className="p-4">{transaksi.status}</td>
              <td className="p-4 flex justify-center gap-4">
                <Eye className="text-gray-600 cursor-pointer" />
                <Pencil className="text-gray-600 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
