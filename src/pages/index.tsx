import type { NextPage } from 'next'
import { HeaderBanner } from '../components/headerBanner/headerBanner'
import { ArticlePreview } from '../components/articlePreview/articlePreview'
import { TagList } from '../components/tags/tags'
import { Link } from '../components/_common/link/link'

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
                  <Link href="/" className="nav-link disabled">
                    Your Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" className="nav-link active">
                    Global Feed
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
