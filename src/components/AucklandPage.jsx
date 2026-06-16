import { useState, useEffect } from 'react'
import './AucklandPage.css'

// Target: Kiwijam 2025 — 2025-07-25 07:00 NZST (UTC+12) = 2025-07-24 19:00 UTC
const TARGET = new Date('2025-07-24T19:00:00Z').getTime()

function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  }
}

function Countdown() {
  const [t, setT] = useState(getTimeLeft)
  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!t) {
    return (
      <p className="akl-hero__done">
        Thanks for Jamming with us&nbsp;❤️
      </p>
    )
  }

  const units = [
    { v: t.days,    l: 'Days' },
    { v: t.hours,   l: 'Hours' },
    { v: t.minutes, l: 'Minutes' },
    { v: t.seconds, l: 'Seconds' },
  ]
  return (
    <div className="countdown">
      {units.map(({ v, l }) => (
        <div className="countdown__unit" key={l}>
          <span className="countdown__num">{String(v).padStart(2, '0')}</span>
          <span className="countdown__lbl">{l}</span>
        </div>
      ))}
    </div>
  )
}

const SCHEDULE = [
  {
    day: 'Friday',
    items: [
      { time: '5:30 pm', text: 'Pre-Kiwijam gathering — if this is your first Kiwijam, this is for you!' },
      { time: '6:00 pm', text: 'Sign-in desk opens, food' },
      { time: '6:30 pm', text: 'Welcome presentation & official kick-off' },
      { time: '7:00 pm', text: 'Team-forming' },
      { time: '10:30 pm', text: 'Venue closes for the night' },
    ],
  },
  {
    day: 'Saturday',
    items: [
      { time: '8:00 am', text: 'Venue & Makerspace opens' },
      { time: '9:00 am', text: 'Morning announcements' },
      { time: '1:45 pm', text: 'Lunch & Check in with teams' },
      { time: '5:45 pm', text: 'Dinner' },
      { time: '11:00 pm', text: 'Venue closes' },
    ],
  },
  {
    day: 'Sunday',
    items: [
      { time: '8:00 am', text: 'Venue & Makerspace opens' },
      { time: '10:30 am', text: 'Morning announcements' },
      { time: '12:30 pm', text: 'Check in with teams' },
      { time: '4:30 pm', text: 'Deadline for submissions!' },
      { time: '4:45 pm', text: 'Show & Tell (check out each other\'s projects)' },
      { time: '6:30 pm', text: 'Pack up & closing' },
    ],
  },
]

export default function AucklandPage() {
  const isOver = getTimeLeft() === null

  return (
    <>
      {/* ── Hero ── */}
      <section className="akl-hero">
        <div className="akl-hero__inner">
          <h1 className="akl-hero__city">Auckland</h1>

          {isOver ? (
            <h2 className="akl-hero__tagline">Thanks for Jamming with us ❤️</h2>
          ) : (
            <>
              <h2 className="akl-hero__tagline">Tāmaki Makaurau · July 2025</h2>
              <Countdown />
            </>
          )}

          <div className="akl-hero__btns">
            {isOver ? (
              <a href="https://itch.io/jam/kiwijam25" target="_blank" rel="noopener noreferrer" className="btn btn--green">
                View Games
              </a>
            ) : (
              <a href="https://itch.io/jam/kiwijam25" target="_blank" rel="noopener noreferrer" className="btn btn--green">
                Register on Itch.io
              </a>
            )}
            <a href="/about-the-jam" className="btn btn--outline">About the Jam</a>
          </div>
        </div>
      </section>

      {/* ── About blurb ── */}
      <section className="akl-section akl-about">
        <div className="akl-section__inner akl-about__inner">
          <p className="akl-about__text">
            Join us for a weekend of game making — a fun challenge for both first-time and experienced game developers.
            Registration is <strong>FREE</strong>, but you must register before you can jam with us. Please make sure
            you've read the <a href="/fine-print" className="akl-link">small print</a> and the{' '}
            <a href="/code-of-conduct" className="akl-link">Kiwijam Code of Conduct</a> before signing up too.
          </p>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="akl-section akl-schedule" id="schedule">
        <div className="akl-section__inner">
          <h2 className="akl-section__heading">Schedule</h2>
          <p className="akl-schedule__note">
            We won't be open overnight, so we encourage you to make arrangements to get home.
            We'd strongly recommend public transport where possible, as you'll likely be quite tired!
          </p>

          <div className="schedule-grid">
            {SCHEDULE.map(({ day, items }) => (
              <div className="schedule-day" key={day}>
                <h3 className="schedule-day__name">{day}</h3>
                <ul className="schedule-day__list">
                  {items.map(({ time, text }) => (
                    <li className="schedule-day__item" key={time}>
                      <span className="schedule-day__time">{time}</span>
                      <span className="schedule-day__text">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="akl-schedule__footer">
            You're welcome to stay for as much or as little as you'd like. We recommend sticking around
            for the Show & Tell if you can! You will need to arrange your own transport home on Friday
            and Saturday nights — we're unable to provide overnight accommodation.
          </p>
        </div>
      </section>

      {/* ── WiFi ── */}
      <section className="akl-section akl-wifi">
        <div className="akl-section__inner akl-wifi__inner">
          <h2 className="akl-section__heading">WiFi details!</h2>
          <div className="wifi-box">
            <div className="wifi-box__row">
              <span className="wifi-box__label">Network</span>
              <span className="wifi-box__value">UoA-Unleash</span>
            </div>
            <div className="wifi-box__row">
              <span className="wifi-box__label">Password</span>
              <span className="wifi-box__value">UoA_Unl3ash</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to go ── */}
      <section className="akl-section akl-venue" id="venue">
        <div className="akl-section__inner">
          <h2 className="akl-section__heading">Where to go</h2>
          <p className="akl-venue__text">
            Kiwijam Auckland is taking place at the{' '}
            <a href="https://www.cie.auckland.ac.nz/" className="akl-link" target="_blank" rel="noopener noreferrer">
              Unleash Space
            </a>{' '}
            at the University of Auckland. We'd recommend taking public transport to get here if you can,
            as parking in the CBD can be expensive! If you do end up taking a car, the OGGB carpark is
            your best bet for nearby covered parking at $6 per day.
          </p>
          <div className="akl-venue__map">
            <iframe
              title="Unleash Space, University of Auckland"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.627884774894!2d174.76636867687765!3d-36.85226587224072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef8684794936!2sUnleash%20Space%2C%20University%20of%20Auckland!5e0!3m2!1sen!2snz!4v1718000000000!5m2!1sen!2snz"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Supported By ── */}
      <section className="akl-section akl-sponsors">
        <div className="akl-section__inner">
          <h2 className="akl-section__heading">Supported By:</h2>
          <div className="sponsors-grid">
            <a href="https://www.cie.auckland.ac.nz/" target="_blank" rel="noopener noreferrer" className="sponsor-logo">
              <img src="/CIE-Logo-WTR-Vertical-Colour.png" alt="UoA Makers Club / Centre for Innovation and Entrepreneurship" />
            </a>
            <a href="#" className="sponsor-logo">
              <img src="/logo_h_c.png" alt="Sponsor" />
            </a>
            <a href="#" className="sponsor-logo">
              <img src="/GDG-Logo-Colour-Black-Titled-RESx2.png" alt="GDG Auckland" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
