import './AboutPage.css'

const CONTENTS = [
  { num: '1', label: 'Media Permission', href: '#media-permission' },
  { num: '2', label: 'Change to Content, Postponement & Cancellation', href: '#cancellation' },
]

export default function FinePrintPage() {
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
            </li>
          ))}
        </ol>
      </aside>

      <article className="doc-content">
        <h1 className="doc-content__page-title">Fine Print</h1>

        <section id="media-permission">
          <h2 className="doc-content__h2">Media Permission</h2>
          <p className="doc-content__p">
            Audiovisual recordings (e.g, photos) of attendees and projects might be used for
            promotional and marketing purposes for us and our sponsors. When registering, you
            select your preferences for photography, and we will accommodate for this during
            the event. If you wish to not be included in audiovisual recordings, we're more
            than happy to oblige. Please notify{' '}
            <a href="mailto:contact@kiwijam.org" className="doc-content__link">contact@kiwijam.org</a>{' '}
            before the event if you have any questions.
          </p>
        </section>

        <section id="cancellation">
          <h2 className="doc-content__h2">Change to Content, Postponement &amp; Event Cancellation, Disaster Etc</h2>
          <p className="doc-content__p">
            In the unlikely case of event cancellation, the liability of the organisers will be
            limited to the return of paid fees (in this case none). In addition, the organisers
            may alter the location of the event at any time with notice to you. While we
            apologise in advance should an unlikely scenario cause inconvenience, the organisers
            will not be liable for any loss, damages or expenses that may arise.
          </p>
          <p className="doc-content__p">
            In the unlikely case of property you bring being lost, stolen, or damaged, neither
            Kiwijam nor the venue will be held responsible for the replacement or repair of
            these items. That is to say that you alone are responsible for anything you bring
            to the event.
          </p>
          <p className="doc-content__p">
            In the case that you, or a guest you invited, cause damage to Kiwijam's, the
            venue's, or another participant's property, you will be held liable for any costs
            of repair or replacement.
          </p>
          <p className="doc-content__p">
            If you have any questions about the above (or ideas on how it could be improved),
            please get in touch with us! You can do that by emailing us at{' '}
            <a href="mailto:contact@kiwijam.org" className="doc-content__link">contact@kiwijam.org</a>
          </p>
        </section>
      </article>
    </div>
  )
}
