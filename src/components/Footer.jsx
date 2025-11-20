import React from 'react'

function Footer() {
  return (
    <footer className="relative mt-16 border-t border-rose-100/70 bg-white/70 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,192,203,0.15),transparent_40%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm text-rose-900/80">
          As an Amazon Associate, Luxury Lingerie Shop earns from qualifying purchases.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-rose-600/10 text-rose-700 hover:bg-rose-600/20 flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H7.1V12h3.4V9.8c0-3.4 2-5.3 5-5.3 1.4 0 2.9.3 2.9.3v3.2h-1.6c-1.6 0-2.1 1-2.1 2V12h3.6l-.6 2.9h-3v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-rose-600/10 text-rose-700 hover:bg-rose-600/20 flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
          </a>
          <a aria-label="Pinterest" href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-rose-600/10 text-rose-700 hover:bg-rose-600/20 flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2a10 10 0 00-3.7 19.3c-.1-.8-.2-2 .1-2.9l1.4-6c-.3-.6-.5-1.4-.5-2.2 0-2 1.2-3.5 2.7-3.5 1.3 0 2 1 2 2.3 0 1.4-.9 3.5-1.4 5.4-.4 1.6.8 2.9 2.4 2.9 2.8 0 4.9-3 4.9-7.2 0-3-2-5.3-5.8-5.3-4.2 0-6.9 3-6.9 6.3 0 1.1.4 2.3 1 3 .1.1.1.2.1.3l-.4 1.6c-.1.3-.3.4-.6.3-1.7-.7-2.8-2.8-2.8-5.1 0-3.8 3.2-8.3 9.6-8.3 5.1 0 8.4 3.7 8.4 7.5 0 5.2-2.9 9.1-7.2 9.1-1.4 0-2.8-.7-3.4-1.6l-.9 3.4c-1 .4-2 .6-3 .6 1.2 0 2.3-.4 3.4-1.1" />
            </svg>
          </a>
        </div>
        <p className="mt-6 text-xs text-rose-900/70">© {new Date().getFullYear()} Luxury Lingerie Shop — All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
