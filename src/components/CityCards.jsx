import './CityCards.css'

const CITIES = [
  { maori: 'Tāmaki Makaurau', english: 'Auckland', href: '/akl' },
  { maori: 'Ōtautahi', english: 'Christchurch', href: '/chch' },
  { maori: 'Te Whanganui-a-Tara', english: 'Wellington', href: '/wlg' },
  { maori: 'Waihōpai', english: 'Invercargill', href: '/ivc' },
]

export default function CityCards() {
  return (
    <section className="cities" id="cities">
      <div className="cities__inner">
        <h2 className="cities__heading reveal">
          Select your region for registration &amp; local details
        </h2>

        <div className="cities__grid">
          {CITIES.map((city, i) => (
            <a
              key={city.english}
              href={city.href}
              className={`city-card reveal rd${i + 1}`}
            >
              <div className="city-card__bar" />
              <span className="city-card__maori">{city.maori}</span>
              <span className="city-card__english">{city.english}</span>
              <svg className="city-card__arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
