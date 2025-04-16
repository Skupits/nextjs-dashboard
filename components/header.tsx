"use client";

import {
  FaShoppingCart,
  FaBell,
  FaEnvelope,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { Input } from "./ui/input";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { MdDashboard } from "react-icons/md";
// import { signIn } from "next-auth/react";

export default function Header() {
    const router = useRouter();

  return (
    <header className="bg-green-900 text-white py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-4 px-4">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/bg.png"
            alt="Logo"
            width={120}
            height={100}
            className="rounded-md"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold font-serif hover:underline">
            ToIOng
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md w-full order-3 sm:order-none">
          <div className="relative">
            <Input
              type="text"
              placeholder="SEARCH"
              className="rounded-md bg-green-700 text-white placeholder-white pl-10 text-sm sm:text-base md:text-lg w-full"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm sm:text-base">
              <FaSearch />
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm sm:text-base md:text-lg">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/team" className="hover:underline">
            Our Teams
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6 bg-green-800 px-3 py-2 rounded-md">
          <FaShoppingCart className="text-lime-400 text-xl md:text-2xl cursor-pointer" />
          <FaBell className="text-lime-400 text-xl md:text-2xl cursor-pointer" />
          <FaEnvelope className="text-lime-400 text-xl md:text-2xl cursor-pointer" />
          {/* <button
            onClick={() => signIn("credentials", { callbackUrl: "/" })}
            className="text-lime-400 text-xl md:text-2xl cursor-pointer"
          >
            <FaUser />
          </button> */}
          <button
            onClick={() => router.push("/login")}
            className="text-lime-400 text-xl md:text-2xl cursor-pointer"
          >
            <FaUser />
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="text-lime-400 text-xl md:text-2xl cursor-pointer"
          >
            <MdDashboard />
          </button>

          {/* <button
            onClick={() => signIn()}
            className="text-lime-400 text-xl md:text-2xl cursor-pointer"
          >
            <FaUser />
          </button> */}
        </div>
      </div>
    </header>
  );
}
