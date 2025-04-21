import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProductDetail() {
  const { id } = useParams()

  const product = {
    name: 'Produk A',
    img: '/product1.jpg',
    price: 150000,
    description: 'Ini adalah produk A berkualitas tinggi untuk kebutuhan Anda.',
  }

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-2xl mx-auto">
        <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-blue-600 font-semibold text-lg mb-2">Rp {product.price.toLocaleString()}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
      <Footer />
    </>
  )
}
