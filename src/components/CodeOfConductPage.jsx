import './AboutPage.css'

const CONTENTS = [
  { num: '1', label: 'Checklist for your project', href: '#checklist', children: [
    { num: '1.1', label: 'Use Content Warnings', href: '#content-warnings' },
    { num: '1.2', label: "Let us know if you're not sure", href: '#not-sure' },
  ]},
  { num: '2', label: "What we're doing", href: '#what-were-doing' },
  { num: '3', label: 'What you can do', href: '#what-you-can-do' },
  { num: '4', label: 'Getting Support', href: '#getting-support' },
]

export default function CodeOfConductPage() {
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
        <h1 className="doc-content__page-title">Code of Conduct: Overview</h1>
        <p className="doc-content__p">
          We want to help you have a good time this weekend, and part of that is making sure
          that this event is a safe space for everyone. You can use the link above to take a
          look at our full code of conduct policy, but it comes down to this: we want everyone
          to feel welcome, included, and safe. We'll be trying to do everything we can to make
          sure only the best of times are had, and part of that is making clear the support
          available to you and the expectations we have during the event.
        </p>
        <p className="doc-content__p">
          <a href="/code-of-conduct-full" className="doc-content__link">
            View Full Policy
          </a>
        </p>

        <section id="checklist">
          <h2 className="doc-content__h2">Checklist for your project</h2>

          <h3 className="doc-content__h3" id="content-warnings">1. Use Content Warnings</h3>
          <p className="doc-content__p">
            Content warnings are a great way to quickly let people know that your project might
            have sensitive content. Give people a quick heads up of what to expect when talking
            about or sharing your project! Keep in mind &ndash; the full code of conduct policy
            applies to your project too.
          </p>

          <h3 className="doc-content__h3" id="not-sure">2. Let us know if you're not sure</h3>
          <p className="doc-content__p">
            Is there something about your project which is a little bit far from normal? That's
            fine, just let us know and we can take a look.
          </p>
        </section>

        <section id="what-were-doing">
          <h2 className="doc-content__h2">What we're doing</h2>
          <ul className="doc-content__ul">
            <li>Ensuring all-gender bathrooms are available and easy to get to from the main floors.</li>
            <li>Providing a quiet rest space separate from the main room for anyone who wants a break</li>
            <li>Encouraging the use of pronoun labels on lanyards</li>
            <li>Making our code of conduct easily available, and communicating our expectations for the weekend</li>
            <li>Checking in with teams regularly to help make sure everyone's working well together</li>
          </ul>
        </section>

        <section id="what-you-can-do">
          <h2 className="doc-content__h2">What you can do</h2>
          <p className="doc-content__p">
            If you want a space to chill out and take a break, or if something happened and you
            want to check in, let us know as soon as you can (in person by grabbing someone with
            a crew t-shirt or online via Discord, email, or the phone number in our full policy.
            We want you to be happy at our events. People like you make our events a better place.
          </p>
        </section>

        <section id="getting-support">
          <h2 className="doc-content__h2">Getting Support</h2>
          <p className="doc-content__p">
            <strong>Important:</strong> The Auckland Event is also covered by the{' '}
            <a href="https://makeuoa.nz/" target="_blank" rel="noopener noreferrer" className="doc-content__link">
              Maker Club Code of Conduct
            </a>{' '}
            and the{' '}
            <a href="https://www.auckland.ac.nz/en/about-us/about-the-university/statements-codes/code-of-conduct.html" target="_blank" rel="noopener noreferrer" className="doc-content__link">
              University of Auckland Code of Conduct
            </a>.
          </p>
          <p className="doc-content__p">You can make a personal report by:</p>
          <ul className="doc-content__ul">
            <li>
              Calling or messaging this phone number: Ibrahim Waheed &ndash;{' '}
              <a href="tel:0212928253" className="doc-content__link">021 292 8253</a>.
              This phone number will be continuously monitored for the duration of the event.
            </li>
            <li>Contacting an event organiser at your local venue.</li>
          </ul>
          <p className="doc-content__p">
            Kiwijam Auckland Organiser &ndash; Ibrahim Waheed &ndash;{' '}
            <a href="tel:0212928253" className="doc-content__link">021 292 8253</a>
          </p>
          <p className="doc-content__p">
            Kiwijam Auckland Email &ndash;{' '}
            <a href="mailto:hello@kiwijam.org" className="doc-content__link">hello@kiwijam.org</a>
          </p>
          <p className="doc-content__p">
            Sexual assault hotline &ndash;{' '}
            <a href="tel:0800883300" className="doc-content__link">0800 883 300</a>
          </p>
          <p className="doc-content__p"><strong>At the University of Auckland:</strong></p>
          <p className="doc-content__p">
            If an incident takes place on campus you can phone University Security on{' '}
            <a href="tel:+6493737599" className="doc-content__link">+64 9 373 7599</a> extension
            85000, or dial 85000 directly if you use an internal University telephone. You can
            read more about{' '}
            <a href="https://www.auckland.ac.nz/en/on-campus/getting-around-campus/campus-security-safety.html" target="_blank" rel="noopener noreferrer" className="doc-content__link">
              safety on campus here
            </a>.
          </p>
          <p className="doc-content__p">
            When taking a personal report, our staff will ensure you are safe and cannot be
            overheard. They may involve other event staff to ensure your report is managed
            properly. Once safe, we will ask you to tell us about what happened. This can be
            upsetting, but we'll handle it as respectfully as possible, and you can bring
            someone to support you. You won't be asked to confront anyone and we won't tell
            anyone who you are.
          </p>
          <p className="doc-content__p">
            Our team will be happy to help you contact venue security, local law enforcement,
            local support services, provide escorts, or otherwise assist you to feel safe for
            the duration of the event. We value your attendance.
          </p>
          <p className="doc-content__p">
            Sexual assault hotline &ndash;{' '}
            <a href="tel:0800883300" className="doc-content__link">0800 883 300</a>
          </p>
        </section>
      </article>
    </div>
  )
}
