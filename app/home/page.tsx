import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold mb-4">Selamat datang di TolOng!</h1>
        <p className="text-gray-600 mb-6">Temukan produk terbaik dengan harga terjangkau.</p>
        <img src="/banner.jpg" alt="Banner" className="w-full max-w-4xl mx-auto rounded mb-10" />
        <h2 className="text-2xl font-semibold mb-4">Produk Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/product/1" className="border p-4 rounded shadow hover:shadow-lg">
            <img src="/product1.jpg" className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-bold">Produk A</h3>
            <p className="text-blue-600 font-semibold">Rp 150.000</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
