// "use client";

// import { Input } from "@/components/ui/input";
// import { useState } from "react";

// interface SearchProps {
//   onSearch: (value: string) => void;
// }

// export default function Search({ onSearch }: SearchProps) {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     onSearch(value);
//   };

//   return (
//     <div className="flex justify-end mb-4">
//       <Input
//         type="text"
//         placeholder="Cari barang..."
//         className="w-64 rounded-full"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  onSearch: (value: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    // Jangan pakai mb-4 di sini karena sudah di-wrap di parent-nya
    <div className="relative w-64">
      <SearchIcon
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <input
        type="text"
        placeholder="Cari barang..."
        value={searchTerm}
        onChange={handleChange}
        className="text-black w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}
