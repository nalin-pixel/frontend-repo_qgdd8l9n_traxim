import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl text-white max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-sm text-white/80">Pictiv.Studio</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold leading-tight">Timeless Photography Crafted in Nashik</h1>
          <p className="mt-4 text-white/90">Wedding • Portrait • Maternity — curated with classic aesthetics and meticulous detail by Dhiraj.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#portfolio" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-medium">View Portfolio</a>
            <a href="#booking" className="px-5 py-2.5 rounded-lg bg-transparent border border-white/70 text-white font-medium">Book a Session</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
    </section>
  )
}

export default Hero