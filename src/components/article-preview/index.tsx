import Link from 'next/link'
import Image from 'next/image'

export const ArticlePreview = () => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link href="/profile">
          <Image src="http://i.imgur.com/Qr71crq.jpg" width={32} height={32} />
        </Link>
        <div className="info">
          <Link href="/">
            <a className="author">Eric Simons</a>
          </Link>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> 29
        </button>
      </div>
      <Link href="/">
        <a className="preview-link">
          <h1>How to build webapps that scale</h1>
          <p>This is the description for the post.</p>
          <span>Read more...</span>
          <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline">Music</li>
            <li className="tag-default tag-pill tag-outline">Song</li>
          </ul>
        </a>
      </Link>
    </div>
  )
}
