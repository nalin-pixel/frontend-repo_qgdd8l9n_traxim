import { useEffect, useState } from 'react'

const categories = [
  { key: 'wedding', title: 'Wedding Photography', desc: 'Candid, rituals and classic couple portraits.' },
  { key: 'portrait', title: 'Portrait Photography', desc: 'Studio/editorial portraits with timeless lighting.' },
  { key: 'maternity', title: 'Maternity Photography', desc: 'Serene, elegant and emotionally rich.' },
  { key: 'other', title: 'Other Assignments', desc: 'Engagements, family sessions, fashion & more.' },
]

const sampleImages = {
  wedding: [
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521337580988-0f294f7cb2d9?q=80&w=1600&auto=format&fit=crop',
  ],
  portrait: [
    'https://images.unsplash.com/photo-1514846160150-2cfb4b0132d7?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop',
  ],
  maternity: [
    'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541692641319-981cc79ee10d?q=80&w=1600&auto=format&fit=crop',
  ],
  other: [
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  ],
}

function Portfolio() {
  const [active, setActive] = useState('wedding')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (Object.keys(sampleImages).includes(hash)) setActive(hash)
  }, [])

  return (
    <section id="portfolio" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Portfolio</h2>
          <p className="text-gray-600 mt-2">Explore curated highlights across categories.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-sm border transition ${active === c.key ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <p className="text-gray-700 mb-6">{categories.find(x => x.key === active)?.desc}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {sampleImages[active].map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-xl shadow-sm">
              <img src={src} alt="portfolio" className="w-full h-72 object-cover group-hover:scale-105 transition duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#contact" className="inline-block px-5 py-2.5 rounded-lg bg-gray-900 text-white">Enquire for this category</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
