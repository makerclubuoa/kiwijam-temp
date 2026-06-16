import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <p className="footer__copy">Copyright &copy; 2025 Kiwijam</p>
          <a href="/fine-print" className="footer__tc">Event T&amp;C's</a>
        </div>

        <nav className="footer__links">
          <a href="mailto:hello@kiwijam.org" className="footer__link">Get in Touch</a>
          <a
            href="https://twitter.com/KiwijamAKL"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Connect on Twitter
          </a>
          <a
            href="https://itch.io/jam/kiwijam-2020"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Past Games
          </a>
        </nav>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/kiwijam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__icon-link footer__icon-link--fb"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M24 12.073C24 5.405 18.627 0 12 0 5.373 0 0 5.405 0 12.073c0 6.026 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.1 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/KiwijamAKL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="footer__icon-link footer__icon-link--tw"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
