import React, {Component} from 'react';
import qs from 'query-string';

import { Paginate } from '../Paginate';

import { getArticles } from '../../api/newsapi';

import './ArticleView.scss';
import { ArticleTile } from '../ArticleTile';

export class ArticleView extends Component {
  constructor(props) {
    super(props);
    const {sourceId, sourceName} = qs.parse(this.props.location.search);
    this.state = {
      articles : [],
      curPage  : 1,
      numPages : 1,
      sorting: 'publishedAt',
      sourceId,
      sourceName
    }
    this.onPageChange = this.onPageChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  componentWillMount() {
    this.getArticles();
  }

  onPageChange(curPage) {
    this.setState({
      curPage
    });
    this.getArticles(curPage);
  }

  onSortChange(event) {
    const { value } = event.target;
    this.setState({
      sorting: value
    });
    this.getArticles(1, value);
  }

  getArticles(curPage, sorting) {
    const {sourceId} = this.state;
    if(curPage === undefined) {
      curPage = this.state.curPage;
    }
    getArticles(sourceId, curPage, sorting).then(
      ({articles, totalResults}) => {
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
      sorting,
      sourceName
    } = this.state;
    return (
      <section className="article-view">
        <header>
          <h1>Articles for {sourceName}</h1>
        </header>
        <div>
          Choose sorting
          <select value={sorting} onChange={this.onSortChange}>
            <option value="relevancy">
              relevancy
            </option>
            <option value="popularity">
              popularity
            </option>
            <option value="publishedAt">
              publish date
            </option>
          </select>
        </div>
        {(numPages > 1 ) && <Paginate curPage={curPage} numPages={numPages} onChange={this.onPageChange}/>}
        <section className="article-list">
          {articles && articles.map(
            (article,idx) => <ArticleTile article={article} key={`article-tile-${idx}`}/>
          )}
        </section>
      </section>
    );
  }
}
