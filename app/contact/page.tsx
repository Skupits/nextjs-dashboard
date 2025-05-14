import Header from "../components/header"
import Footer from '../components/Footer'

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="p-10 max-w-xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Hubungi Kami</h1>
                <form className="space-y-4">
                    <input type="text" placeholder="Nama" className="w-full border p-2" />
                    <input type="email" placeholder="Email" className="w-full border p-2" />
                    <textarea placeholder="Pesan" className="w-full border p-2 h-32" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Kirim</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
