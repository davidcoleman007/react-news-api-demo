import React, { Component } from 'react';

import './SourceListItem.scss';

export class SourceListItem extends Component {
  render() {
    const { source:{
      category,
      country,
      description,
      id,
      language,
      name,
      url
    }} = this.props;
    return (
      <li className="source-list-item">
        <div className="img-container">
          <img src={`http://i.olsh.me/icon?url=${url}&size=80..120..200`}/>
        </div>
        <div className="source-info">
          <div className="source-name">
            {name} ({language})
          </div>
          <div className="source-desc">
            {description}
          </div>
        </div>
      </li>
    );
  }
}
