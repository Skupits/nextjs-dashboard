"use client";

import Link from "next/link";
import {
  Home,
  Users,
  Package,
  HandCoins,
  Warehouse,
  FileText,
  ShoppingCart,
  ClipboardList,
  ArrowLeft,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-green-900 text-white p-3 z-50">
      <h1 className="text-2xl font-bold ml-16 mb-4">Owner</h1>

      <div className="flex flex-col justify-between h-full">
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <Home size={20} />
            Dashboard
          </Link>
          <Link
            href="/dashboard/kelolaInformasiBarang"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard/kelolaInformasiBarang")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <Users size={20} />
            Kelola Informasi Barang
          </Link>
          <Link
            href="/dashboard/kelolaTransaksi"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard/kelolaTransaksi")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <HandCoins size={20} />
            Kelola Transaksi
          </Link>
          <Link
            href="/dashboard/kelolaPersediaan"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard/kelolaPersediaan")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <Warehouse size={20} />
            Kelola Persediaan
          </Link>
          <Link
            href="/dashboard/kelolaLaporan"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard/kelolaLaporan")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <FileText size={20} />
            Kelola Laporan
          </Link>
          <Link
            href="/dashboard/barang"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard/barang")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <Package size={20} />
            Barang
          </Link>
          <Link
            href="/dashboard/transaksi"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard/transaksi")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <ShoppingCart size={20} />
            Transaksi
          </Link>
          <Link
            href="/dashboard/detailTransaksi"
            className={clsx(
              "flex items-center gap-3 px-4 py-2 rounded-lg",
              isActive("/dashboard/detailTransaksi")
                ? "bg-green-700 text-white font-medium"
                : "text-gray-400 hover:text-white hover:bg-green-700"
            )}
          >
            <ClipboardList size={20} />
            Detail Pesanan
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-green-700 mt-auto"
          >
            <ArrowLeft size={20} />
            Kembali
          </Link>
        </nav>
      </div>
    </aside>
  );
}
