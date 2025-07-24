// src/components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="bg-white py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contáctanos</h2>
        <p className="text-gray-600 mb-8">¿Tienes preguntas o quieres agendar un servicio? Envíanos un mensaje y te responderemos pronto.</p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Correo</label>
            <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Mensaje</label>
            <textarea rows="4" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}
