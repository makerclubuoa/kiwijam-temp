import FernIcon from './FernIcon.jsx'
import './InfoSection.css'

export default function InfoSection() {
  return (
    <section className="info" id="about">
      <div className="info__inner">

        {/* What is a game jam? */}
        <div className="info-block">
          <div className="info-block__text reveal">
            <span className="info-block__tag">About the Jam</span>
            <h2 className="info-block__heading">What is a game jam?</h2>
            <p className="info-block__body">
              It&rsquo;s a chance to make games! Game jams are all about coming together to design
              and build board and digital games based on a theme (usually announced at the beginning)
              in a super short amount of time. In this one, you&rsquo;ll have about 48&nbsp;hours
              (including sleep) to go all the way from idea to whatever you can hack together
              in&nbsp;time.
            </p>
            <a
              href="https://itch.io/jam/kiwijam24"
              target="_blank"
              rel="noopener noreferrer"
              className="info-block__btn"
            >
              View 2024 Entries
            </a>
          </div>

          <div className="info-block__visual reveal rd2">
            <div className="info-block__fern-wrap">
              <FernIcon className="info-block__fern" />
              <div className="info-block__fern-bg" />
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="info-block info-block--flip">
          <div className="info-block__media reveal">
            <iframe
              src="https://www.youtube.com/watch?v=puwGFUUpHK0"
              title="Kiwijam '21 mini-documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="info-block__text reveal rd2">
            <span className="info-block__tag">How it works</span>
            <h2 className="info-block__heading">How it works</h2>
            <p className="info-block__body">
              There are typically a few sites around New Zealand for Kiwijam. Usually, we have
              one in Auckland, Wellington, Dunedin, and Christchurch. Each site will differ slightly
              in its rules and guidelines sent out to its registered participants, so we recommend
              checking out our About the Jam page.
            </p>

            <a href="/about-the-jam" className="info-block__btn info-block__btn--outline">
              About the Jam
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
