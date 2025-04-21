export default function ForgotPasswordPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Lupa Password</h1>
        <p className="mb-4 text-center text-sm">Masukkan email Anda untuk mengatur ulang password.</p>
        <input type="email" placeholder="Email" className="border p-2 mb-2 w-64" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Kirim</button>
      </div>
    )
  }
  