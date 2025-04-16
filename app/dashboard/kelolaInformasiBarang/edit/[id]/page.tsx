import { use } from "react";
import TableTambahBarang from "../table";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // 👈 ini penting!

  return (
    <div className="ml-32 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 flex justify-center">
      <div className="w-full max-w-[1070px] bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-black text-2xl sm:text-3xl font-bold mb-8">
            Edit Barang
          </h1>
        </div>
        <TableTambahBarang id={id} />
      </div>
    </div>
  );
}
