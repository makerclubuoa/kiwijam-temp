import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--shadow' : ''}`}>
      <div className="nav__inner">
        <a href="/" className="nav__logo" aria-label="Kiwijam Auckland home">
          <img src="/kiwijam-black.svg" alt="Kiwijam" className="nav__logo-img" />
          <span className="nav__logo-city">Auckland</span>
        </a>

        <nav className={`nav__links${mobileOpen ? ' nav__links--open' : ''}`}>
          <a href="/" className="nav__link nav__link--active" onClick={close}>Home</a>
          <a href="#schedule" className="nav__link" onClick={close}>Schedule</a>
          <a href="#venue" className="nav__link" onClick={close}>Venue</a>
          <a href="/code-of-conduct" className="nav__link" onClick={close}>Code of Conduct</a>
          <a
            href="https://itch.io/jam/kiwijam25"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link nav__link--cta"
            onClick={close}
          >
            Register
          </a>
        </nav>

        <button
          className={`nav__burger${mobileOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
