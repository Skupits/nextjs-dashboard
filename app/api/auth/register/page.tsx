"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../../../../components/header";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(data.message || "Registrasi gagal");
  
      alert("Registrasi berhasil! Silakan login.");
      router.push("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Terjadi kesalahan saat registrasi.");
      }
    }
  };
  return (
    <>
    <Header/>
      <div className="flex min-h-screen">
        {/* Left Panel with image */}
        <div className="w-1/2 relative">
          <Image
            src="/login.png"
            alt="Register Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-[#96B88F] flex items-center justify-center">
          <div className="w-[70%] max-w-md">
            <h2 className="text-center text-white text-2xl font-semibold mb-8">
              REGISTER
            </h2>

            <label className="block text-sm text-black mb-1 font-semibold uppercase">
              Nama
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mb-4 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
              placeholder="Nama Lengkap"
            />

            <label className="block text-sm text-black mb-1 font-semibold uppercase">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
              placeholder="Email"
            />

            <label className="block text-sm text-black mb-1 font-semibold uppercase">
              No. Telepon
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 mb-4 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
              placeholder="08xxxxxxxxxx"
            />

            <label className="block text-sm text-black mb-1 font-semibold uppercase">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-6 rounded-full bg-[#F2EBD8] text-black focus:outline-none"
              placeholder="********"
            />

            <button
              onClick={handleRegister}
              className="w-full bg-green-900 text-white py-2 rounded-full text-lg font-medium"
            >
              Sign Up
            </button>

            <p className="text-center text-black mt-4">
              Sudah punya akun?{" "}
              <a
                href="/login"
                className="text-blue-500 font-semibold underline hover:text-white transition"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
