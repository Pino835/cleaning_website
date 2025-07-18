// src/components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          CleanCo
        </Link>

        {/* Navegación */}
        <nav className="space-x-6 text-gray-700 font-medium hidden md:block">
          <Link href="#about" className="hover:text-green-600 transition">Nosotros</Link>
          <Link href="#services" className="hover:text-green-600 transition">Servicios</Link>
          <Link href="#map" className="hover:text-green-600 transition">Ubicacion</Link>
          <Link href="#contact" className="hover:text-green-600 transition">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
