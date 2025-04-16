// "use client";

// import { useState } from "react";
// import { Search as SearchIcon } from "lucide-react";

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
//     // Jangan pakai mb-4 di sini karena sudah di-wrap di parent-nya
//     <div className="relative w-full w-max-5xl">
//       <SearchIcon
//         className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//         size={18}
//       />
//       <input
//         type="text"
//         placeholder="Cari barang..."
//         value={searchTerm}
//         onChange={handleChange}
//         className="text-black w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
    <div className="relative w-full max-w-5xl">
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
