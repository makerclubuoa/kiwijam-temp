import './HomePage.css'

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
      { time: '1:45 pm', text: 'Lunch & check in with teams' },
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
      { time: '4:45 pm', text: "Show & Tell (check out each other's projects)" },
      { time: '6:30 pm', text: 'Pack up & closing' },
    ],
  },
]

const SPONSORS = [
  {
    src: '/CIE-Logo-WTR-Vertical-Colour.png',
    alt: 'UoA Centre for Innovation and Entrepreneurship',
    href: 'https://www.cie.auckland.ac.nz/',
  },
  { src: '/logo_h_c.png', alt: 'UoA Maker Club', href: 'https://makeuoa.nz/' },
  {
    src: '/GDG-Logo-Colour-Black-Titled-RESx2.png',
    alt: 'University of Auckland Game Developer Guild',
    href: 'https://www.uoagdg.com/',
  },
]

function GamepadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M7.5 7A5.5 5.5 0 0 0 2 12.5v.6a3.9 3.9 0 0 0 7.1 2.2l.3-.4h5.2l.3.4a3.9 3.9 0 0 0 7.1-2.2v-.6A5.5 5.5 0 0 0 16.5 7h-9Zm-.5 3a.9.9 0 0 1 .9.9v.7h.7a.9.9 0 0 1 0 1.8h-.7v.7a.9.9 0 0 1-1.8 0v-.7h-.7a.9.9 0 0 1 0-1.8h.7v-.7A.9.9 0 0 1 7 10Zm9 .25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow">Tāmaki Makaurau · Auckland</span>
            <h1 className="hero__title">
              Kiwijam is Aotearoa's own homegrown annual in-person game-jam.
            </h1>
            <p className="hero__intro">
              Join us for a weekend of game making at the University of Auckland — a fun challenge
              for both first-time and experienced game developers. We invite newcomers and veteran
              jammers to experiment, share ideas and make a game of any type in 48 (ish) hours.
            </p>

            <div className="hero__btns">
              <a
                href="https://itch.io/jam/kiwijam25"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--green"
              >
                <GamepadIcon /> See Previous Runs
              </a>
              <a href="#about" className="btn btn--outline">Learn More</a>
            </div>
          </div>

          <div className="hero__media">
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/JrZ_PisHCkI"
                title="Kiwijam recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Registration CTA band (forest green, zigzag edges) ── */}
      <section className="region-band">
        <div className="region-band__inner region-band__inner--cta">
          <h2 className="region-band__title">Registration is FREE</h2>
          <p className="region-band__text">
            You must register before you can jam with us. Please make sure you've read the{' '}
            <a href="/fine-print" className="region-band__link">small print</a> and the{' '}
            <a href="/code-of-conduct" className="region-band__link">Kiwijam Code of Conduct</a>{' '}
            before signing up.
          </p>
          <a
            href="https://itch.io/jam/kiwijam25"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--white"
          >
            Register for Kiwijam Auckland
          </a>
        </div>
      </section>

      {/* ── About + Auckland details (medium green) ── */}
      <section className="about-band" id="about">
        <div className="about-band__inner">
          <div className="about-band__top">
            <div className="about-band__copy">
              <h2 className="about-band__heading">What is a game jam?</h2>
              <p className="about-band__text">
                It's a chance to make games! Game jams are all about coming together to design and
                build board and digital games based on a theme (usually announced at the beginning)
                in a super short amount of time. In this one, you'll have about 48 hours (including
                sleep) to go all the way from idea to whatever you can hack together in time.
              </p>

              <h2 className="about-band__heading">Who should come?</h2>
              <p className="about-band__text">
                Kiwijam is meant for anyone with an interest in making games. Even if you've never
                made a game before or don't have any game dev skills &mdash; come along, give it a
                go, and learn something new. Kiwijam Auckland is an R18 event as stated in the
                registration.
              </p>
            </div>

            <div className="about-band__media">
              <div className="video-frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/2eLVumnZC1E"
                  title="Kiwijam mini-doc"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="about-band__caption">
                Check out the full mini-doc for a taste of Kiwijam '21! (9 mins)
              </p>
            </div>
          </div>

          {/* Where to go */}
          <div className="akl-block" id="venue">
            <h2 className="about-band__heading">Where to go</h2>
            <p className="about-band__text">
              Kiwijam Auckland is taking place at the{' '}
              <a
                href="https://www.cie.auckland.ac.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-band__link"
              >
                Unleash Space
              </a>{' '}
              at the University of Auckland. We'd recommend taking public transport to get here if
              you can, as parking in the CBD can be expensive! If you do end up taking a car, the
              OGGB carpark is your best bet for nearby covered parking at $6 per day.
            </p>
            <div className="akl-map">
              <iframe
                title="Unleash Space, University of Auckland"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.627884774894!2d174.76636867687765!3d-36.85226587224072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef8684794936!2sUnleash%20Space%2C%20University%20of%20Auckland!5e0!3m2!1sen!2snz!4v1718000000000!5m2!1sen!2snz"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="akl-block" id="schedule">
            <h2 className="about-band__heading">Schedule</h2>
            <p className="about-band__text akl-note">
              We won't be open overnight, so please make arrangements to get home. We'd strongly
              recommend public transport where possible, as you'll likely be quite tired!
            </p>
            <div className="schedule-grid">
              {SCHEDULE.map(({ day, items }) => (
                <div className="schedule-day" key={day}>
                  <h3 className="schedule-day__name">{day}</h3>
                  <ul className="schedule-day__list">
                    {items.map(({ time, text }) => (
                      <li className="schedule-day__item" key={time + text}>
                        <span className="schedule-day__time">{time}</span>
                        <span className="schedule-day__text">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* WiFi */}
          <div className="akl-block">
            <h2 className="about-band__heading">WiFi details</h2>
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

          {/* Sponsors */}
          <div className="akl-block">
            <h2 className="about-band__heading">Supported By</h2>
            <div className="sponsors-grid">
              {SPONSORS.map(({ src, alt, href }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-logo"
                >
                  <img src={src} alt={alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
