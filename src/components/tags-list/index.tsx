import Link from 'next/link'

export const TagList = () => {
  return (
    <div className="col-md-3">
      <aside className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          <Link href="/">
            <a className="tag-pill tag-default">programming</a>
          </Link>
          <Link href="/">
            <a className="tag-pill tag-default">javascript</a>
          </Link>
          <Link href="/">
            <a className="tag-pill tag-default">emberjs</a>
          </Link>
          <Link href="/">
            <a className="tag-pill tag-default">angularjs</a>
          </Link>
          <Link href="/">
            <a className="tag-pill tag-default">react</a>
          </Link>
          <Link href="/">
            <a className="tag-pill tag-default">mean</a>
          </Link>
          <Link href="/">
            <a className="tag-pill tag-default">node</a>
          </Link>
          <Link href="/">
            <a className="tag-pill tag-default">rails</a>
          </Link>
        </div>
      </aside>
    </div>
  )
}
