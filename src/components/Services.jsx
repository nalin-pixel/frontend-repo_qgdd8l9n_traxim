import { useEffect, useState } from 'react'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Services & Packages</h2>
          <p className="text-gray-600 mt-2">Carefully designed offerings for weddings, portraits and maternity sessions.</p>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading services...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="border rounded-xl p-6 hover:shadow-md transition">
                <div className="text-xs uppercase tracking-widest text-gray-500">{s.category}</div>
                <h3 className="text-xl font-semibold mt-1">{s.name}</h3>
                <p className="text-gray-600 mt-2 min-h-[72px]">{s.description}</p>
                {s.deliverables?.length > 0 && (
                  <ul className="mt-3 text-sm text-gray-700 list-disc ml-5 space-y-1">
                    {s.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-5">
                  <a href="#booking" className="inline-block px-4 py-2 rounded-lg bg-gray-900 text-white">Enquire</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
