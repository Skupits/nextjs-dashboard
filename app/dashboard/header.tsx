"use client";

import Image from "next/image";
import { user } from "../lib/placeholder-data";

export default function DashboardHeader() {
  if (!user) return null; 

  return (
    <header className="bg-green-900 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-end gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={user.image}
              alt={user.name}
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-lg font-semibold">{user.name}</span>
        </div>
      </div>
    </header>
  );
}
