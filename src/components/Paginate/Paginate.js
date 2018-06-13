import React, { Component } from 'react';

import './Paginate.scss';

export class Paginate extends Component {
  constructor(props) {
    super(props);
    this.generateClickHandler = this.generateClickHandler.bind(this);
  }
  generateClickHandler(pg) {
    const {onChange} = this.props;
    return (event) => {
      event.preventDefault();
      console.log('page change', pg);
      onChange && onChange(pg);
    };
  }
  render() {
    const {
      curPage = 1,
      numPages = 10,
      bottom = false
    } = this.props;
    const top = !bottom;
    const isLastPageRange = (curPage > (numPages-9));
    const firstPageNum = isLastPageRange?Math.max((numPages-9),1):Math.max(curPage - 3,1);
    const leftPagesToShow = (
      isLastPageRange
      ? (numPages - firstPageNum + 1)
      : 5
    );
    const showRightRange = !isLastPageRange;
    const keyTag = top?'top':'bottom';
    const leftPages = (
      Array(leftPagesToShow).fill(true).map(
        (v,idx) => {
          const pgNum = firstPageNum + idx;
          const onClick = this.generateClickHandler(pgNum);
          return (
            <li key={`paginate-section-${keyTag}-${idx}`}>
              <a href="#none" onClick={onClick}>{pgNum}</a>
            </li>
          );
        }
      )
    );
    return (
      <section className={`paginate-section ${keyTag}`}>
        <button>&lt;</button>
        <button>&lt;&lt;</button>
        <ul className="page-list">
          {leftPages}
          {showRightRange && (
            <React.Fragment>
              <li><span>&hellip;</span></li>
              {rightPages(numPages, keyTag)}
            </React.Fragment>
          )}
        </ul>
        <button>&gt;</button>
        <button>&gt;&gt;</button>
      </section>
    );
  }
}

const rightPages = (numPages, keyTag) => {
  return (
    Array(5).fill(true).map(
      (v,idx) => {
        const pNum = numPages - 4 + idx;
        return (
          <li key={`paginate-section-${keyTag}-${pNum}`}>
            <a href="#none">{pNum}</a>
          </li>
        );
      }
    )
  );
};
