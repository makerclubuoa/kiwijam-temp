import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)
  const isActive = (path) => location.pathname === path

  return (
    <header className={`nav${scrolled ? ' nav--shadow' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo" aria-label="Kiwijam Auckland home">
          <img src="/kiwijam-black.svg" alt="Kiwijam" className="nav__logo-img" />
          <span className="nav__logo-city">Auckland</span>
        </Link>

        <nav className={`nav__links${mobileOpen ? ' nav__links--open' : ''}`}>
          <Link to="/" className={`nav__link${isActive('/') ? ' nav__link--active' : ''}`} onClick={close}>Home</Link>
          <Link to="/about-the-jam" className={`nav__link${isActive('/about-the-jam') ? ' nav__link--active' : ''}`} onClick={close}>About</Link>
          <Link to="/code-of-conduct" className={`nav__link${isActive('/code-of-conduct') ? ' nav__link--active' : ''}`} onClick={close}>Code of Conduct</Link>
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
