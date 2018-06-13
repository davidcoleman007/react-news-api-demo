import React from 'react';
import { SourceListItem } from './SourceListItem';

import './SourceList.scss';

class SourceList extends React.Component {
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(source) {
    const { onItemClick } = this.props;
    onItemClick && onItemClick(source);
  }

  render() {
    const { curPage, sources } = this.props;
    const start = (curPage-1) * 10;
    const page = sources.slice(start, Math.min(start + 10, sources.length-1));
    return (
      <ul className="source-list">
        {page.map(source =>
          <SourceListItem source={source} onClick={this.onItemClick}/>
        )}
      </ul>
    );
  }

}

export default SourceList;
