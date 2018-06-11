import React, { Component } from 'react';

export class Paginate extends Component {
  render() {
    const {
      curPage,
      pgToShow = 10,
    } = this.props;
    return (
      <section className="paginate-section">
        <button>&lt;</button>
        <button>&lt;&lt;</button>
        <ul className="page-list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>n-4</li>
          <li>n-3</li>
          <li>n-2</li>
          <li>n-1</li>
          <li>n</li>
        </ul>
        <button>&lt;</button>
        <button>&lt;&lt;</button>
      </section>
    );
  }
}

