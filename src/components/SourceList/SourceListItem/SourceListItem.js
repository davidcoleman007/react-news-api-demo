import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SourceListItem.scss';

export class SourceListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const { onClick, source } = this.props;
    onClick && onClick(source);
  }
  render() {
    const { source:{
      description,
      id,
      language,
      name,
      url
    }} = this.props;
    return (
      <li className="source-list-item">
        <Link to={`/articles?sourceId=${id}&sourceName=${name}`} >
          <div className="img-container">
            <img src={`http://i.olsh.me/icon?url=${url}&size=80..120..200`} alt="site logo"/>
          </div>
          <div className="source-info">
            <div className="source-name">
              {name} ({language})
            </div>
            <div className="source-desc">
              {description}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}
