import './HomePage.css'

const CITIES = [
  { maori: 'Tāmaki Makaurau', city: 'Auckland', href: '/akl' },
  { maori: 'Ōtautahi', city: 'Christchurch', href: '/chch' },
  { maori: 'Te Whanganui-a-Tara', city: 'Wellington', href: '/wlg' },
  { maori: 'Waihōpai', city: 'Invercargill', href: '/ivc' },
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
            <h1 className="hero__title">
              Kiwijam is Aotearoa's own homegrown annual in-person game-jam.
            </h1>

            <div className="hero-cities">
              {CITIES.map(({ maori, city, href }) => (
                <a className="hero-city" href={href} key={city}>
                  <span className="hero-city__maori">{maori}</span>
                  <span className="hero-city__city">{city}</span>
                </a>
              ))}
            </div>

            <p className="hero__intro">
              We invite newcomers and veteran game jammers to experiment, share ideas and make a
              game of any type for 48 (ish) hours in one of the many sites all over the country.
            </p>

            <div className="hero__btns">
              <a
                href="https://itch.io/jam/kiwijam25"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--green"
              >
                <GamepadIcon /> View 2025 Games!
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

      {/* ── Region band (forest green, zigzag edges) ── */}
      <section className="region-band">
        <div className="region-band__inner">
          <h2 className="region-band__title">
            Select your region for registration &amp; local details
          </h2>
          <div className="region-cities">
            {CITIES.map(({ maori, city, href }) => (
              <a className="region-city" href={href} key={city}>
                <span className="region-city__maori">{maori}</span>
                <span className="region-city__city">{city}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── About (medium green) ── */}
      <section className="about-band" id="about">
        <div className="about-band__inner">
          <div className="about-band__copy">
            <h2 className="about-band__heading">What is a game jam?</h2>
            <p className="about-band__text">
              It's a chance to make games! Game jams are all about coming together to design and
              build board and digital games based on a theme (usually announced at the beginning)
              in a super short amount of time. In this one, you'll have about 48 hours (including
              sleep) to go all the way from idea to whatever you can hack together in time.
            </p>

            <a
              href="https://itch.io/jam/kiwijam25"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white about-band__cta"
            >
              View 2024 Entries
            </a>

            <h2 className="about-band__heading">How it works</h2>
            <p className="about-band__text">
              There are typically a few sites around New Zealand for Kiwijam. Usually, we have one
              in Auckland, Wellington, Dunedin, and Christchurch. Each site will differ slightly in
              it's rules and guidelines sent out to it's registered participants, so we recommend{' '}
              <a href="/about-the-jam" className="about-band__link">
                checking out our About the Jam page
              </a>.
            </p>

            <h2 className="about-band__heading">Who should come to Kiwijam?</h2>
            <p className="about-band__text">
              Kiwijam is meant for anyone with an interest in making games. Even if you've never
              made a game before or don't have any game dev skills &mdash; come along, give it a go,
              and learn something new. Kiwijam is an R18 event unless a site makes arrangements to
              allow under 18 participants as stated in their registration.
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
      </section>
    </>
  )
}
