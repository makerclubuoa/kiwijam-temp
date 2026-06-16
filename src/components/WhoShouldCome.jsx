import './WhoShouldCome.css'

export default function WhoShouldCome() {
  return (
    <section className="who">
      <div className="who__bg-orb" aria-hidden="true" />
      <div className="who__bg-fern" aria-hidden="true" />

      <div className="who__inner">
        <span className="who__tag reveal">Open to everyone</span>

        <h2 className="who__heading reveal rd1">
          Who should come to Kiwijam?
        </h2>

        <div className="who__body">
          <p className="who__text reveal rd2">
            Kiwijam is meant for anyone with an interest in making games. Even if you&rsquo;ve
            never made a game before or don&rsquo;t have any game dev skills. You could join a
            group and find out you&rsquo;re good at something and never knew it. Or maybe you just
            want to observe this year and come back next year after doing a few game dev tutorials.
          </p>

          <p className="who__text who__text--highlight reveal rd3">
            We hope that Kiwijam is a way for new gamedevs or people who are interested in starting
            their gamedev journey to get inspired and feel like they are a part of a bigger
            community. For this reason Kiwijam will always be free.
          </p>
        </div>

        <div className="who__note reveal rd4">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="who__note-icon">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Kiwijam is an R18 event unless a site makes arrangements to allow under&nbsp;18 participants
          as stated in their registration.
        </div>

        <div className="reveal rd5">
          <a href="/about-the-jam" className="who__cta">
            Learn More
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="who__cta-icon">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
