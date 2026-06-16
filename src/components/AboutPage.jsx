import './AboutPage.css'

const CONTENTS = [
  { num: '1', label: 'Our story', href: '#our-story' },
  { num: '2', label: 'Our energy', href: '#our-energy', children: [
    { num: '2.1', label: 'Who should come to Kiwijam', href: '#who-should-come' },
    { num: '2.2', label: 'What do I get out of Kiwijam?', href: '#what-do-i-get' },
  ]},
  { num: '3', label: 'How it works', href: '#how-it-works', children: [
    { num: '3.1', label: 'A place to jam', href: '#a-place-to-jam' },
    { num: '3.2', label: 'The date, time and duration', href: '#date-time' },
    { num: '3.3', label: 'On site support', href: '#on-site-support' },
    { num: '3.4', label: 'The theme', href: '#the-theme' },
    { num: '3.5', label: 'Collective Code of Conduct', href: '#code-of-conduct-section' },
    { num: '3.6', label: 'Somewhere to submit our games', href: '#submit' },
  ]},
]

const SUBMITTED_YEARS = [2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015]
const TWITTER_YEARS = [2020,2019,2018,2017,2016,2015,2014,2013]
const HIGHLIGHT_YEARS = [2023,2021,2019,2016,2015]

export default function AboutPage() {
  return (
    <div className="doc-layout">
      <aside className="doc-sidebar">
        <p className="doc-sidebar__title">Contents</p>
        <ol className="doc-sidebar__list">
          {CONTENTS.map(item => (
            <li key={item.num}>
              <a href={item.href} className="doc-sidebar__link">
                {item.num} {item.label}
              </a>
              {item.children && (
                <ol className="doc-sidebar__sublist">
                  {item.children.map(child => (
                    <li key={child.num}>
                      <a href={child.href} className="doc-sidebar__link doc-sidebar__link--sub">
                        {child.num} {child.label}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </aside>

      <article className="doc-content">
        <h1 className="doc-content__page-title">About the Jam</h1>

        <section id="our-story">
          <h2 className="doc-content__h2">Our story</h2>
          <p className="doc-content__p">
            In 2013 a few Auckland game developers decided that, although there are plenty of
            online gamejams throughout the year, the only regular in-person event was the{' '}
            <a href="https://globalgamejam.org/" target="_blank" rel="noopener noreferrer" className="doc-content__link">
              Global Game Jam
            </a>{' '}
            and it was smack bang in the middle of go-to-the-beach season. So we ran Kiwijam13
            at AUT University for about 50 Auckland game developers.
          </p>
          <p className="doc-content__p">
            Kiwijam has run every year since with centres from all over Aotearoa joining the
            whanau.
          </p>
          <p className="doc-content__p">To get an idea of our journey check out:</p>
          <p className="doc-content__p">
            Submitted games from previous years:{' '}
            {SUBMITTED_YEARS.map((y, i) => (
              <span key={y}>
                <a
                  href={`https://itch.io/jam/kiwijam${String(y).slice(-2)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-content__link"
                >
                  {y}
                </a>
                {i < SUBMITTED_YEARS.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="doc-content__p">
            Our history in Twitter posts:{' '}
            {TWITTER_YEARS.map((y, i) => (
              <span key={y}>
                <a
                  href={`https://twitter.com/search?q=%23kiwijam${String(y).slice(-2)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-content__link"
                >
                  {y}
                </a>
                {i < TWITTER_YEARS.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="doc-content__p">
            Some of the highlights from the Auckland site:{' '}
            {HIGHLIGHT_YEARS.map((y, i) => (
              <span key={y}>
                <a
                  href={`https://www.youtube.com/results?search_query=kiwijam+${y}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-content__link"
                >
                  {y}
                </a>
                {i < HIGHLIGHT_YEARS.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </section>

        <section id="our-energy">
          <h2 className="doc-content__h2">Our energy</h2>

          <h3 className="doc-content__h3" id="who-should-come">Who should come to Kiwijam</h3>
          <p className="doc-content__p">
            Kiwijam is meant for anyone with an interest in making games. Even if you've never
            made a game before or don't have any game dev skills. You could join a group and
            find out you're good at something and never knew it. Or maybe you just want to
            observe this year and come back next year after doing a few game dev tutorials.
          </p>
          <p className="doc-content__p">
            We hope that Kiwijam is a way for new gamedevs or people who are interested in
            starting their gamedev journey to get inspired and feel like they are a part of a
            bigger community. For this reason Kiwijam will always be free.
          </p>
          <p className="doc-content__p">
            Kiwijam is an R18 event unless a site makes arrangements to allow under 18
            participants as stated in their registration.
          </p>

          <h3 className="doc-content__h3" id="what-do-i-get">What do I get out of Kiwijam?</h3>
          <p className="doc-content__p">
            Kiwijam is less about what you make and more about how the experience changes you.
            For that reason it is freer and looser than many of the other gamejams out there.
          </p>
          <p className="doc-content__p">
            Each site adds their own herbs and spices but generally speaking, what you decide
            to make at Kiwijam is up to you. Sometimes we have hardcore jammers creating
            absolutely everything from scratch. Sometimes people use existing kitset tools to
            explore an idea. At some sites it's common to bring along what you've been working
            on to feed off the energy in the room and be inspired by the ideas and new
            perspectives of the other attendees.
          </p>
          <p className="doc-content__p">
            We encourage the creation of any type of playful thing. Sure, most of the games
            worked on during Kiwijam are digital in some way, but we also have board games,
            street games, mega games, interactive performances, rapid prototyped interfaces,
            games without endings or win conditions, "not-games", "walking simulators"&hellip;
            If it's something you're supposed to play, we probably want to see it&hellip; and
            also play it.
          </p>
          <p className="doc-content__p">
            We hope that you walk away from Kiwijam having learned a new skill, improved your
            practice, met some people, got some great ideas, been inspired or had a great time.
          </p>
          <p className="doc-content__p">
            If you managed to make a playable game too &ndash; well that's just swell.
          </p>
          <p className="doc-content__p">
            If you have any doubt about what you should and should not make at Kiwijam, join
            our discord or ask your site organizers.
          </p>
          <p className="doc-content__p">
            For inspiration check out some of the like-minded events run around the world from
            the more obvious{' '}
            <a href="https://globalgamejam.org/" target="_blank" rel="noopener noreferrer" className="doc-content__link">Global Game Jam</a>
            {' '}&ndash; to the online-only{' '}
            <a href="https://ldjam.com/" target="_blank" rel="noopener noreferrer" className="doc-content__link">Ludum Dare</a>
            {' '}&ndash; themed jams like{' '}
            <a href="https://itch.io/jam/asylum-jam-2023" target="_blank" rel="noopener noreferrer" className="doc-content__link">Asylum Jam</a>
            {' '}&ndash; and alternative jams like{' '}
            <a href="https://itch.io/jam/altctljam" target="_blank" rel="noopener noreferrer" className="doc-content__link">alt.ctl.jam</a>
            {' '}and{' '}
            <a href="http://www.eniarof.com/" target="_blank" rel="noopener noreferrer" className="doc-content__link">Eniarof</a>.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="doc-content__h2">How it works</h2>
          <p className="doc-content__p">
            There are four sites for Kiwijam21: Auckland, Wellington, Dunedin and Christchurch.
            Each site will differ slightly in it's rules and guidelines sent out to it's
            registered participants, but the following things are common to every site over
            Aotearoa.
          </p>

          <h3 className="doc-content__h3" id="a-place-to-jam">A place to jam</h3>
          <p className="doc-content__p">
            Your site will offer a space to jam. Sites may offer different functions but, apart
            from the usual venue facilities (toilets, light, exits, etc&hellip;) at the very
            least they will also provide tables, seats, power and wifi. The rooms will also
            vibrate with the ambient hum of excitement, the focus of hard mahi, the cries of
            failure, the cheers of success and, eventually, the roar of applause, the din of
            gameplay and the sighs of relief.
          </p>
          <p className="doc-content__p">
            Your site will provide drinkable water and a safe dry place to eat your packed or
            purchased food and snacks.
          </p>
          <p className="doc-content__p">
            Some sites may also offer specialized spaces, equipment, computers and resources
            such as laser cutters, meeting areas, whiteboard, breakout rooms or repurposable
            play spaces.
          </p>
          <p className="doc-content__p">
            Some sites may run a shared or catered lunch as part of their schedule, but often
            food is up to you to either bring with you or purchase nearby.
          </p>

          <h3 className="doc-content__h3" id="date-time">The date, time and duration</h3>
          <p className="doc-content__p">
            Your site will open on Friday evening to commence the event. Sometimes doors will
            open sooner or later than others but every site will run though it's admin and
            housekeeping so that they are ready for the theme reveal at around 6PM&hellip; ish.
          </p>
          <p className="doc-content__p">
            Your site will run the jam for roughly 48hours. Sometimes the hosts will shorten
            the actual working part of the jam so that everyone has a chance to play some games
            and socialize at the end without having to stay up late on a school night.
          </p>
          <p className="doc-content__p">
            Some sites may also hold scheduled events such as guest speakers, playtest sessions,
            awards or maybe they will invite mentors to visit and provide advice.
          </p>

          <h3 className="doc-content__h3" id="on-site-support">On site support</h3>
          <p className="doc-content__p">
            Your site will have one or more people to provide support and keep the event moving.
            They will help people who are having trouble forming teams, field your questions and
            react to anything technical or social that might arise during the event.
          </p>

          <h3 className="doc-content__h3" id="the-theme">The theme</h3>
          <p className="doc-content__p">
            Your site will announce the theme on the first night. Themes are shared by all of
            the sites. However, even though we all share the same theme, it's meant as a way to
            'flavour' the jam as opposed to a restriction that you have to adhere to no matter
            what.
          </p>
          <p className="doc-content__p">
            Previous themes include: "Piano of the Dead", "He/She/They walk amongst us",
            "Into the Night", "Single use", "Chain reaction", "On the brink", "Connected
            Worlds" and an intentionally ugly image of an ice cream on a flag with the word
            "sacrifice" written in highlighter green Comic Sans.
          </p>

          <h3 className="doc-content__h3" id="code-of-conduct-section">Collective Code of Conduct</h3>
          <p className="doc-content__p">
            Your site will expect you to follow the{' '}
            <a href="/code-of-conduct" className="doc-content__link">Kiwijam Code of Conduct</a>{' '}
            which aligns with that of the NZ Game Developer Association. Some sites may also
            have further rules that apply and will be announced on the first night. Examples
            include things like the opening hours of the venue or noise restrictions.
          </p>

          <h3 className="doc-content__h3" id="submit">Somewhere to submit our games</h3>
          <p className="doc-content__p">
            You will submit your game online so we &ndash; and everyone else &ndash; can see
            all the greatness, and the blunders, that come out of Kiwijam.
          </p>
          <p className="doc-content__p">
            More details from each site about the format of the event you are attending will be
            sent out later once you have registered.
          </p>
        </section>
      </article>
    </div>
  )
}
