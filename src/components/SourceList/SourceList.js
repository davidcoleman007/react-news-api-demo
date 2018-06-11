import React from 'react';
import { SourceListItem } from './SourceListItem';

import './SourceList.scss';

class SourceList extends React.Component {
  render() {
    const { sources } = this.props;
    return (
      <ul className="source-list">
        {sources.map(source =>
          <SourceListItem source={source}/>
        )}
      </ul>
    );
  }

}

export default SourceList;
