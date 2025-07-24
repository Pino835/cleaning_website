'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const serviciosRef = useRef(null)
  const recursosRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviciosRef.current &&
        !serviciosRef.current.contains(event.target) &&
        recursosRef.current &&
        !recursosRef.current.contains(event.target)
      ) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          CleanCo
        </Link>

        {/* Navegación */}
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex items-center">

          <Link href="/about" className="hover:text-green-600 transition">Nosotros</Link>

          <Link href="/services" className="hover:text-green-600 transition">Por qué contratarnos?</Link>

          {/* Dropdown 1: Servicios */}
          <div className="relative" ref={serviciosRef}>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'servicios' ? null : 'servicios')}
              className="hover:text-green-600 transition"
            >
              Servicios ▾
            </button>

            {openDropdown === 'servicios' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <Link href="/residential" className="block px-4 py-2 text-sm hover:bg-green-100">Limpieza Residencial</Link>
                <Link href="/commercial" className="block px-4 py-2 text-sm hover:bg-green-100">Limpieza Comercial</Link>
                <Link href="/postwork" className="block px-4 py-2 text-sm hover:bg-green-100">Limpieza Post-Obra</Link>
              </div>
            )}
          </div>

          <Link href="/map" className="hover:text-green-600 transition">Ubicación</Link>

          {/* Dropdown 2: Ubicación */}
          <div className="relative" ref={recursosRef}>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'recursos' ? null : 'recursos')}
              className="hover:text-green-600 transition"
            >
              Recursos ▾
            </button>

            {openDropdown === 'recursos' && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-green-100">Contacto</Link>
                <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-green-100">Blog</Link>
                <Link href="/faqs" className="block px-4 py-2 text-sm hover:bg-green-100">FAQs</Link>
              </div>
            )}
          </div>

        </nav>
      </div>
    </header>
  )
}
