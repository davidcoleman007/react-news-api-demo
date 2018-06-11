import React from 'react';

import { CATEGORIES } from '../../constants/categories';
import { COUNTRIES } from '../../constants/countries';

import './SourceFilter.scss';

export class SourceFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory : CATEGORIES[0],
      selectedCountry  : COUNTRIES[0]
     };
  }

  render() {
    const {
      selectedCategory,
      selectedCountry
    } = this.state;
    console.log(CATEGORIES);
    return (
      <header className="source-filter-header">
      <h3>Filter sources</h3>
        <div>
          Text:
          <input placeholder="enter search terms"/>
        </div>
        <div>
          Category:
          <select value={selectedCategory}>
            {CATEGORIES.map( (catName, idx) => (
              <option key={`source-filter-category-${idx}`} value={idx}>
                {catName}
              </option>
            ))}
          </select>
        </div>
        <div>
          Country:
          <select value={selectedCountry}>
            {CATEGORIES.map( (countryName, idx) => (
              <option key={`source-filter-country-${idx}`} value={idx}>
                {countryName}
              </option>
            ))}
          </select>
        </div>
      </header>
    );
  }
}
