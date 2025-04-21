import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const products = [
  { id: 1, name: 'Produk A', price: 150000, img: '/product1.jpg' },
  { id: 2, name: 'Produk B', price: 120000, img: '/product2.jpg' },
  { id: 3, name: 'Produk C', price: 90000, img: '/product3.jpg' },
]

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="border p-4 rounded shadow hover:shadow-lg">
              <img src={product.img} className="w-full h-40 object-cover mb-2 rounded" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-blue-600 font-semibold">Rp {product.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
