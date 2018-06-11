import React from 'react';
import { SourceListItem } from './SourceListItem';

import './SourceList.scss';

class SourceList extends React.Component {
  render() {
    const { curPage, sources } = this.props;
    const start = curPage * 10;
    return (
      <ul className="source-list">
        {sources.slice(start, start + 10).map(source =>
          <SourceListItem source={source}/>
        )}
      </ul>
    );
  }

}

export default SourceList;
