import { useRouter } from 'next/router'
import { Link } from '../../_common/link/link'
import { LinkNav } from '../../_common/link/linkNav'

export const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <LinkNav href="/" pathname={pathname}>
              Home
            </LinkNav>
          </li>
          <li className="nav-item">
            <LinkNav href="/auth/login" pathname={pathname}>
              Sign in
            </LinkNav>
          </li>
          <li className="nav-item">
            <LinkNav href="/auth/register" pathname={pathname}>
              Sign up
            </LinkNav>
          </li>
          <li className="nav-item">
            <LinkNav href="/article/new" pathname={pathname}>
              <i className="ion-compose" /> New Article
            </LinkNav>
          </li>
          <li className="nav-item">
            <LinkNav href="/settings" pathname={pathname}>
              <i className="ion-gear-a" /> Settings
            </LinkNav>
          </li>
        </ul>
      </div>
    </nav>
  )
}
