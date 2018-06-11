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
      numPages : 0,
      sources : [],
     };
     this.onPageChange = this.onPageChange.bind(this);
  }

  componentWillMount() {
    getSources().then(
      (resp) => {
        const { sources, status } = resp;
        console.log(status,sources);
        this.setState({
          sources,
          numPages : ((sources.length / PAGE_SIZE)>>0)
        })
      }
    )
  }

  onPageChange(curPage) {
    this.setState({
      curPage
    });
  }

  render() {
    const {
      curPage,
      numPages,
      sources
    } = this.state;
    console.log('numPages', numPages);
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
