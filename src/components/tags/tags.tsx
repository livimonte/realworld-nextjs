import { Link } from '../_common/link/link'

export const TagList = () => {
  return (
    <div className="col-md-3">
      <aside className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          <Link href="/" className="tag-pill tag-default">
            programming
          </Link>
          <Link href="/" className="tag-pill tag-default">
            javascript
          </Link>
          <Link href="/" className="tag-pill tag-default">
            emberjs
          </Link>
          <Link href="/" className="tag-pill tag-default">
            angularjs
          </Link>
          <Link href="/" className="tag-pill tag-default">
            react
          </Link>
          <Link href="/" className="tag-pill tag-default">
            mean
          </Link>
          <Link href="/" className="tag-pill tag-default">
            node
          </Link>
          <Link href="/" className="tag-pill tag-default">
            rails
          </Link>
        </div>
      </aside>
    </div>
  )
}
