import React from 'react';
import { SourceListItem } from './SourceListItem';

import './SourceList.scss';

class SourceList extends React.Component {
  render() {
    const { curPage, sources } = this.props;
    const start = (curPage-1) * 10;
    const page = sources.slice(start, Math.min(start + 10, sources.length-1));
    return (
      <ul className="source-list">
        {page.map((source, idx) =>
          <SourceListItem key={`source-list-item-${curPage}-${idx}`}
              source={source}
          />
        )}
      </ul>
    );
  }

}

export default SourceList;
