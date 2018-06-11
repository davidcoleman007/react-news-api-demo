import React, { Component } from 'react';
import { SourceFilter } from '../SourceFilter/SourceFilter';
import { Paginate } from '../Paginate';

import SourceList from '../SourceList/SourceList';

import { getSources } from '../../api/newsapi';

export class SourceView extends Component {
  constructor() {
    super();
    this.state = {
      numPages : 0,
      sources : [],
     };
  }

  componentWillMount() {
    getSources().then(
      (resp) => {
        const { sources, status } = resp;
        console.log(status,sources);
        this.setState({
          sources,
          numPages : ((sources.length / 10)>>0) + 1
        })
      }
    )
  }

  render() {
    const {
      numPages,
      sources
    } = this.state;

    return (
      <section>
        <SourceFilter onChange={this.onFilterChange} />
        {(numPages > 1)?<Paginate />:null}
        <SourceList sources={sources}/>
        {(numPages > 1)?<Paginate />:null}
      </section>
    );
  }
}
