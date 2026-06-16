import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [citiesOpen, setCitiesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setCitiesOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--shadow' : ''}`}>
      <div className="nav__inner">
        <a href="/" className="nav__logo" aria-label="Kiwijam home">
          <img src="/kiwijam-black.svg" alt="Kiwijam" className="nav__logo-img" />
        </a>

        <nav className={`nav__links${mobileOpen ? ' nav__links--open' : ''}`}>
          <a href="/" className="nav__link nav__link--active">Home</a>
          <a href="/code-of-conduct" className="nav__link">Code of Conduct</a>
          <a href="/about-the-jam" className="nav__link">More Info</a>

          <div
            className={`nav__drop${citiesOpen ? ' nav__drop--open' : ''}`}
            ref={dropRef}
            onMouseEnter={() => !mobileOpen && setCitiesOpen(true)}
            onMouseLeave={() => !mobileOpen && setCitiesOpen(false)}
          >
            <button
              className="nav__link nav__drop-btn"
              onClick={() => setCitiesOpen(v => !v)}
              aria-expanded={citiesOpen}
            >
              Cities
              <svg viewBox="0 0 10 6" className="nav__chevron" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
            <ul className="nav__drop-menu" role="menu">
              <li><a href="/akl" className="nav__drop-item" role="menuitem">Auckland</a></li>
              <li><a href="/chch" className="nav__drop-item" role="menuitem">Christchurch</a></li>
              <li><a href="/ivc" className="nav__drop-item" role="menuitem">Invercargill</a></li>
            </ul>
          </div>
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
