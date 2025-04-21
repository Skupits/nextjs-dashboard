export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Registrasi</h1>
      <input type="text" placeholder="Nama Lengkap" className="border p-2 mb-2 w-64" />
      <input type="email" placeholder="Email" className="border p-2 mb-2 w-64" />
      <input type="text" placeholder="Username" className="border p-2 mb-2 w-64" />
      <input type="password" placeholder="Password" className="border p-2 mb-2 w-64" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Daftar</button>
    </div>
  )
}
