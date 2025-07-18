// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} CleanCo. Todos los derechos reservados.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#about" className="hover:underline">Nosotros</a>
          <a href="#services" className="hover:underline">Servicios</a>
          <a href="#map" className="hover:underline">Ubicacion</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
