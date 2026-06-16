import { Link } from 'react-router-dom'
import './AboutPage.css'

const CONTENTS = [
  { num: '1', label: 'Harassment', href: '#harassment' },
  { num: '2', label: 'Enforcement', href: '#enforcement' },
  { num: '3', label: 'Reporting', href: '#reporting' },
  { num: '4', label: 'Personal Report', href: '#personal-report' },
]

export default function CodeOfConductFullPage() {
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
        <h1 className="doc-content__page-title">Code of Conduct: Full Policy</h1>
        <p className="doc-content__p">
          Kiwijam is dedicated to providing a harassment-free experience for everyone,
          regardless of gender, gender identity and expression, sexual orientation, disability,
          physical appearance, body size, race, age or religion. We do not tolerate harassment
          of anyone in the game dev community in any form. Participants or attendees violating
          these rules may be sanctioned or expelled from the venue at the discretion of the
          organizers.
        </p>
        <p className="doc-content__p">
          <Link to="/code-of-conduct" className="doc-content__link">Back to Overview</Link>
        </p>

        <section id="harassment">
          <h2 className="doc-content__h2">Harassment</h2>
          <p className="doc-content__p">Harassment includes, but is not limited to:</p>
          <ul className="doc-content__ul">
            <li>Verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion</li>
            <li>Sexual images in public spaces</li>
            <li>Deliberate intimidation, stalking, or following</li>
            <li>Harassing photography or recording</li>
            <li>Sustained disruption of talks or other events</li>
            <li>Inappropriate physical contact</li>
            <li>Unwelcome sexual attention</li>
            <li>Advocating for, or encouraging, any of the above behaviour</li>
          </ul>
        </section>

        <section id="enforcement">
          <h2 className="doc-content__h2">Enforcement</h2>
          <p className="doc-content__p">
            Participants asked to stop any harassing behaviour are expected to comply
            immediately.
          </p>
          <p className="doc-content__p">
            At any of our events, Exhibitors at the meetups or expo halls, sponsors or vendor
            booths, or similar activities are also subject to the anti-harassment policy. In
            particular, exhibitors should not use sexualized images, activities, or other
            material. Booth staff (including volunteers) should not use sexualized
            clothing/uniforms/costumes, or otherwise create a sexualized environment.
          </p>
          <p className="doc-content__p">
            If a participant engages in harassing behaviour, event organisers retain the right
            to take any actions to keep the event a welcoming environment for all participants.
            This includes warning the offender or expulsion from the event, without refund.
          </p>
          <p className="doc-content__p">
            Event organisers may take action to redress anything designed to, or with the clear
            impact of, disrupting the event or making the environment hostile for any
            participants.
          </p>
          <p className="doc-content__p">
            We expect participants to follow these rules at all event venues and event-related
            social activities. We think people should follow these rules outside event
            activities too!
          </p>
        </section>

        <section id="reporting">
          <h2 className="doc-content__h2">Reporting</h2>
          <p className="doc-content__p">
            If someone makes you or anyone else feel unsafe or unwelcome, please report it as
            soon as possible. Harassment and other code of conduct violations reduce the value
            of our events for everyone. We want you to be happy at our events. People like you
            make our events a better place.
          </p>
        </section>

        <section id="personal-report">
          <h2 className="doc-content__h2">Personal Report</h2>
          <p className="doc-content__p">
            How you should report things depends on your location. Not sure which to use?
            Reach out at{' '}
            <a href="mailto:contact@kiwijam.org" className="doc-content__link">contact@kiwijam.org</a>{' '}
            with your report.
          </p>
          <p className="doc-content__p">
            <Link to="/code-of-conduct#getting-support" className="doc-content__link">
              Get Contacts
            </Link>
          </p>
          <p className="doc-content__p">
            This Code aligns with the{' '}
            <a href="https://nzgda.com/about/code-of-conduct/" target="_blank" rel="noopener noreferrer" className="doc-content__link">
              NZGDA Code of Conduct
            </a>.
          </p>
        </section>
      </article>
    </div>
  )
}
