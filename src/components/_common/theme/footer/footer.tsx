import { Link } from '../../link/link'

export const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/" className="logo-font">
        conduit
      </Link>
      <span className="attribution">
        An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </footer>
)
