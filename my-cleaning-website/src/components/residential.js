// src/components/Residential.js
export default function Residential() {
  return (
    <section id="services" className="min-h-screen py-32 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Limpieza Residencial</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-600">Limpieza Residencial</h3>
            <p className="text-gray-600">Servicio de limpieza profunda para hogares, apartamentos y condominios.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-600">Limpieza Comercial</h3>
            <p className="text-gray-600">Ideal para oficinas, consultorios, locales comerciales y espacios compartidos.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-600">Limpieza Post-Obra</h3>
            <p className="text-gray-600">Deja todo reluciente después de remodelaciones o construcciones.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
