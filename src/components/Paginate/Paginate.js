import React, { Component } from 'react';

import './Paginate.scss';

export class Paginate extends Component {
  constructor(props) {
    super(props);
    this.generateClickHandler = this.generateClickHandler.bind(this);
    this.onClickNext          = this.onClickNext.bind(this);
    this.onClickPrev          = this.onClickPrev.bind(this);
  }

  generateClickHandler(pg) {
    const {onChange} = this.props;
    return (event) => {
      event.preventDefault();
      console.log('page change', pg);
      onChange && onChange(pg);
    };
  }

  onClickNext() {
    const { curPage, onChange } = this.props;
    onChange && onChange(curPage + 1);
  }

  onClickPrev() {
    const { curPage, onChange } = this.props;
    onChange && onChange(curPage - 1);
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
    const leftPages = Array(leftPagesToShow).fill(true).map(
      (v,idx) => {
        const pgNum = firstPageNum + idx;
        const onClick = this.generateClickHandler(pgNum);
        return (
          <li key={`paginate-section-${keyTag}-${idx}`}>
            <a href="#none" onClick={onClick} className={(pgNum === curPage)?'selected':''}>{pgNum}</a>
          </li>
        );
      }
    );
    const rightPages = Array(5).fill(true).map(
      (v,idx) => {
        const pNum = numPages - 4 + idx;
        return (
          <li key={`paginate-section-${keyTag}-${pNum}`}>
            <a href="#none" className={(pNum === curPage)?'selected':''}>{pNum}</a>
          </li>
        );
      }
    );

    return (
      <section className={`paginate-section ${keyTag}`}>
        {(curPage !== 1) && <button onClick={this.onClickPrev}>&lt;</button>}
        <ul className="page-list">
          {leftPages}
          {showRightRange && (
            <React.Fragment>
              <li><span>&hellip;</span></li>
              {rightPages}
            </React.Fragment>
          )}
        </ul>
        {(curPage !== numPages) && <button onClick={this.onClickNext}>&gt;</button>}
      </section>
    );
  }
}
