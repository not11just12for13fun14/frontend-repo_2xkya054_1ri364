import React from 'react'

function Header() {
  return (
    <header className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl font-serif tracking-wide text-rose-900/90">
            Luxury Lingerie Shop 💎
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-rose-900/80">
          <a href="#categories" className="hover:text-rose-700 transition-colors">Categories</a>
          <a href="#about" className="hover:text-rose-700 transition-colors">About</a>
          <a
            href="https://linktr.ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-rose-500 transition-colors"
          >
            Shop on Amazon
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
