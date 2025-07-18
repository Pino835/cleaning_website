// src/components/Hero.js
export default function Hero() {
  return (
    <section className="bg-[url('/images/cleaning.png')] bg-cover bg-center h-[100vh] flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Limpieza profesional para tu hogar</h1>
        <p className="mb-6">Servicio confiable, eficiente y personalizado</p>
        <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600 transition">Cotiza ahora</button>
      </div>
    </section>
  )
}