// src/components/Contact.js
export default function Contact() {
  return (
    <section id="map" className="py-32 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Ubicación</h2>
            <div className="aspect-video w-full border-4 border-white shadow-xl rounded-lg overflow-hidden">
            <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.961441547009!2d-84.090724!3d9.928069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb8128f9fddb%3A0xf0ad4f3b5b4a0c4a!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2scr!4v1700000000000!5m2!1sen!2scr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
    </section>

  )
}
