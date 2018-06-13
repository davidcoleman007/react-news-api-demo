import React, {Component} from 'react';
import qs from 'query-string';

import { Paginate } from '../Paginate';

import { getArticles } from '../../api/newsapi';

import './ArticleView.scss';

export class ArticleView extends Component {
  constructor(props) {
    super(props);
    const {sourceId, sourceName} = qs.parse(this.props.location.search);
    this.state = {
      articles : [],
      curPage  : 1,
      numPages : 1,
      sourceId,
      sourceName
    }
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentWillMount() {
    this.getArticles();
  }

  onPageChange(curPage) {
    console.log(curPage);
    this.setState({
      curPage
    });
    this.getArticles(curPage);
  }

  getArticles(curPage) {
    const {sourceId} = this.state;
    if(curPage === undefined) {
      curPage = this.state.curPage;
    }
    console.log(curPage);

    getArticles(sourceId, curPage).then(
      ({articles, totalResults}) => {
        console.log(articles);
        this.setState({
          numPages: ((totalResults/10)>>0) + 1,
          articles,
        });
      }
    )
  }

  render() {
    const {
      articles,
      curPage,
      numPages,
      sourceId,
      sourceName
    } = this.state;
    console.log(this.props.location.search, sourceId);
    return (
      <section className="article-view">
        <header>
          Articles for {sourceName}
        </header>
        {(numPages > 1 ) && <Paginate curPage={curPage} numPages={numPages} onChange={this.onPageChange}/>}
        <section className="article-list">
          {articles && articles.map(
            article => {
              const {url, urlToImage} = article;
              return (
                <article className="article-tile">
                  <header>
                    <div className="img">
                      {!urlToImage && <img src={`http://i.olsh.me/icon?url=${url}&size=80..120..200`} alt="site logo"/>}
                      {urlToImage && <img src={urlToImage} alt="article img"/>}
                    </div>
                    <div className="title">
                      {article.title}
                    </div>
                  </header>
                  <div className="description">
                    {article.description}
                  </div>
                </article>
              );
            }
          )}
        </section>
      </section>
    );
  }
}
