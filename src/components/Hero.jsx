import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background with lace-like gradient and texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,182,193,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(245,222,179,0.25),transparent_40%)]"></div>
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-rose-950/90 tracking-tight">
          Luxury Lingerie Shop 💎
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-rose-900/80 max-w-2xl mx-auto">
          Discover elegance, comfort, and confidence.
        </p>
        <div className="mt-8">
          <a
            href="https://linktr.ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-rose-600 text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl hover:bg-rose-500 transition-all"
          >
            Shop on Amazon
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
