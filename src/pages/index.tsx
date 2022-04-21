import type { NextPage } from 'next'
import Link from 'next/link'
import { HeaderBanner } from '../components/header-banner'
import { ArticlePreview } from '../components/article-preview'
import { TagList } from '../components/tags-list'

const Home: NextPage = () => {
  return (
    <div className="home-page">
      <HeaderBanner />

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link disabled">Your Feed</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active">Global Feed</a>
                  </Link>
                </li>
              </ul>
            </div>

            <ArticlePreview />
            <ArticlePreview />
          </div>

          <TagList />
        </div>
      </div>
    </div>
  )
}

export default Home
