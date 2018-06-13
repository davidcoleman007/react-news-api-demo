import React from 'react';

import './ArticleTile.scss';

export class ArticleTile extends React.Component {
  constructor() {
    super();
    this.state = { isImageError:false };
    this.onImageError = this.onImageError.bind(this);
  }

  onImageError() {
    this.setState({
      isImageError:true
    });
  }

  render() {
    const {article: {
      description,
      title,
      url,
      urlToImage
    }} = this.props;
    const { isImageError } = this.state;
    return (
      <article className="article-tile">
        <header>
          <div className="img">
            {(!urlToImage || isImageError) &&
              <img alt="site logo"
                  src={`http://i.olsh.me/icon?url=${url}&size=80..120..200`}
              />
            }
            {(urlToImage && !isImageError) &&
              <img alt="article img"
                  onError={this.onImageError}
                  src={urlToImage}
              />
            }
          </div>
          <div className="title">
            <h2>{title}</h2>
          </div>
        </header>
        <div className="description">
          {description}
        </div>
      </article>

    );
  }
}
