import React, { Component } from 'react';
import { SourceFilter } from '../SourceFilter/SourceFilter';
import { Paginate } from '../Paginate';

import SourceList from '../SourceList/SourceList';

import { getSources } from '../../api/newsapi';

const PAGE_SIZE = 10;

export class SourceView extends Component {
  constructor() {
    super();
    this.state = {
      curPage : 1,
      sources : [],
     };
     this.onFilterChange = this.onFilterChange.bind(this);
     this.onPageChange = this.onPageChange.bind(this);
  }

  componentWillMount() {
    getSources().then(
      (resp) => {
        const { sources } = resp;
        this.setState({
          allSources: [
            ...sources
          ],
          sources: [
            ...sources
          ]
        })
      }
    )
  }

  onFilterChange(filters) {
    const {
      category,
      country,
    } = filters;
    const {allSources} = this.state;
    const newSources = [
      ...allSources.reduce(
        (a, c) => {
          if((category === 'all' || c.category === category) &&
            (country === 'all' || c.language === country)) {
            a.push(c);
          }
          return a;
        }, []
      )
    ];
    this.setState({
      sources: newSources
    });
  }

  onPageChange(curPage) {
    this.setState({
      curPage
    });
  }

  render() {
    const {
      curPage,
      sources
    } = this.state;
    const numPages = ((sources.length / PAGE_SIZE)>>0);
    return (
      <section>
        <SourceFilter onChange={this.onFilterChange} />
        {(numPages > 1)?<Paginate curPage={curPage} numPages={numPages} onChange={this.onPageChange}/>:null}
        <SourceList sources={sources} curPage={curPage}/>
        {(numPages > 1)?<Paginate  curPage={curPage} numPages={numPages} bottom />:null}
      </section>
    );
  }
}
