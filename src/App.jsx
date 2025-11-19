import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Booking from './components/Booking'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-wide">Pictiv.Studio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>
            <a href="#services" className="hover:text-gray-600">Services</a>
            <a href="#booking" className="hover:text-gray-600">Booking</a>
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </nav>
          <a href="#booking" className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm">Book Now</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Portfolio />
        <Services />
        <Booking />
        <About />
        <Contact />
      </main>

      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Pictiv.Studio · Crafted by Dhiraj</p>
          <a href="/test" className="underline">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App