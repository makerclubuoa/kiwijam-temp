import { useState, useEffect } from 'react'
import FernIcon from './FernIcon.jsx'
import './Hero.css'

// Target: 2025-07-25 07:00 NZST (UTC+12) = 2025-07-24 19:00 UTC
const TARGET = new Date('2025-07-24T19:00:00Z').getTime()

function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function CountUnit({ value, label }) {
  return (
    <div className="hero-count__unit">
      <span className="hero-count__num">{String(value).padStart(2, '0')}</span>
      <span className="hero-count__label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--a" aria-hidden="true" />
      <div className="hero__orb hero__orb--b" aria-hidden="true" />
      <div className="hero__orb hero__orb--c" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow reveal">
            <span className="hero__eyebrow-dot" />
            Aotearoa's Game Jam
          </span>

          <h1 className="hero__heading reveal rd1">
            Kiwijam is Aotearoa's own homegrown annual in-person game-jam.
          </h1>

          <p className="hero__sub reveal rd2">
            We invite newcomers and veteran game jammers to experiment, share ideas and make
            a game of any type for 48&nbsp;(ish) hours in one of the many sites all over the country.
          </p>

          <div className="reveal rd3">
            {timeLeft ? (
              <div className="hero-count">
                <CountUnit value={timeLeft.days} label="Days" />
                <div className="hero-count__sep" aria-hidden="true">:</div>
                <CountUnit value={timeLeft.hours} label="Hours" />
                <div className="hero-count__sep" aria-hidden="true">:</div>
                <CountUnit value={timeLeft.minutes} label="Minutes" />
                <div className="hero-count__sep" aria-hidden="true">:</div>
                <CountUnit value={timeLeft.seconds} label="Seconds" />
              </div>
            ) : (
              <div className="hero-count__done">
                <span>🎮</span> Thanks for jamming with us!
              </div>
            )}
          </div>

          <div className="hero__actions reveal rd4">
            <a
              href="https://itch.io/jam/kiwijam25"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta"
            >
              Register on Itch.io
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="hero__cta-arrow">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className="hero__cta-ghost">Learn more ↓</a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__fern-glow" />
          <FernIcon className="hero__fern" />
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
