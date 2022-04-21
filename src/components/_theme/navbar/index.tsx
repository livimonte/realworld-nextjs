import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">conduit</a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/*TODO: Add "active" class when you're on that page"*/}
            <Link href="/">
              <a className="nav-link active">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">
                <i className="ion-compose" /> &nbsp;New Article
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">
                <i className="ion-gear-a" /> &nbsp;Settings
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Sign in</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
