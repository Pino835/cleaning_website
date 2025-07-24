// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto items-center justify-between text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} CleanCo. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
