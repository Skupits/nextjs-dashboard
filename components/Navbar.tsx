'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/home' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">TolOng</h1>
      <div className="space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium ${
              pathname === item.href ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
