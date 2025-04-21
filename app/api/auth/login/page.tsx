'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username === 'admin123' && password === '12345') {
      router.push('/admin/dashboard')
    } else if (username === 'user123' && password === '12345') {
      router.push('/home')
    } else {
      alert('Username atau password salah!')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 mb-2 w-64"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2 w-64"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      <div className="mt-4 text-sm">
        <a href="/auth/register" className="text-blue-600 mr-2">Daftar</a>
        <a href="/auth/forgot-password" className="text-blue-600">Lupa Password?</a>
      </div>
    </div>
  )
}
