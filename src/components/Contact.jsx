function Contact() {
  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Contact & Support</h2>
          <p className="text-gray-600 mt-2">Studio: Nashik • Instagram: <a className="underline" target="_blank" href="https://instagram.com/dheeraj_deore14">@dheeraj_deore14</a></p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border">
              <p className="text-sm text-gray-500">WhatsApp</p>
              <a href="https://wa.me/" target="_blank" className="text-gray-900 font-medium">Message on WhatsApp</a>
            </div>
            <div className="p-4 rounded-xl bg-white border">
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:contact@pictiv.studio" className="text-gray-900 font-medium">contact@pictiv.studio</a>
            </div>
            <div className="p-4 rounded-xl bg-white border">
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:+91" className="text-gray-900 font-medium">+91-XXXXX-XXXXX</a>
            </div>
            <div className="p-4 rounded-xl bg-white border">
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-gray-900 font-medium">Nashik, Maharashtra</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border">
          <p className="text-gray-800 font-medium">Seasonal offers and updates</p>
          <p className="text-gray-600 text-sm mt-1">Join our list for classic inspirations and studio news.</p>
          <div className="mt-4 flex gap-2">
            <input placeholder="Your email" className="flex-1 border rounded px-3 py-2" />
            <button className="px-4 py-2 rounded bg-gray-900 text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact