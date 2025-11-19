function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">About Dhiraj</h2>
          <p className="text-gray-600 mt-4">Rooted in Nashik, Dhiraj crafts photographs that feel both classic and intimate. With extensive experience across wedding ceremonies and makeup-focused portraits, the studio blends fine-art sensibilities with Indian traditions.</p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p>• Philosophy: Timeless imagery over trends</p>
            <p>• Approach: Calm, attentive and detail-led</p>
            <p>• Clients: Couples, families and creative professionals</p>
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
          <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop" alt="Dhiraj" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default About
