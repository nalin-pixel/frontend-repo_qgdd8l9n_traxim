import { useState } from 'react'

function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_name: '', preferred_date: '', preferred_time: '', location: '', notes: '' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) setStatus('Thank you! Your request has been received. We will confirm shortly.')
      else setStatus(data?.detail || 'Something went wrong')
    } catch (e) {
      setStatus('Network error.')
    }
  }

  return (
    <section id="booking" className="py-16 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Booking</h2>
        <p className="text-gray-600 mt-2 mb-8">Choose your preferred date and share a few details. We will confirm via email or WhatsApp.</p>

        <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-sm">
          <input className="border p-3 rounded" placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
          <input className="border p-3 rounded" placeholder="Email (optional)" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
          <input className="border p-3 rounded" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} />
          <input className="border p-3 rounded" placeholder="Service (e.g., Wedding Day Coverage)" value={form.service_name} onChange={e=>setForm({...form, service_name: e.target.value})} />
          <input type="date" className="border p-3 rounded" value={form.preferred_date} onChange={e=>setForm({...form, preferred_date: e.target.value})} required />
          <input type="time" className="border p-3 rounded" value={form.preferred_time} onChange={e=>setForm({...form, preferred_time: e.target.value})} />
          <input className="border p-3 rounded md:col-span-2" placeholder="Location" value={form.location} onChange={e=>setForm({...form, location: e.target.value})} />
          <textarea className="border p-3 rounded md:col-span-2" rows="4" placeholder="Notes" value={form.notes} onChange={e=>setForm({...form, notes: e.target.value})} />
          <div className="md:col-span-2 flex items-center justify-between">
            <button type="submit" className="px-5 py-2.5 rounded-lg bg-gray-900 text-white">Request Booking</button>
            {status && <p className="text-sm text-gray-700">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Booking
