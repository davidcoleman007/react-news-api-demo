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
     this.onCatChange     = this.onCatChange.bind(this);
     this.onCountryChange = this.onCountryChange.bind(this);
  }

  onCatChange(event) {
    const { onChange } = this.props;
    const {value} = event.target;
    const filter = {
      ...this.state,
      selectedCategory : value
    };
    this.setState(filter);
    this.notifyChange(filter);
  }

  onCountryChange(event) {
    const {value} = event.target;
    const filter = {
      ...this.state,
      selectedCountry : value
    };
    this.setState(filter);
    this.notifyChange(filter);
  }

  notifyChange(filter) {
    const {onChange} = this.props;
    onChange && onChange({
      category : filter.selectedCategory,
      country  : filter.selectedCountry
    });

  }
  render() {
    const {
      selectedCategory,
      selectedCountry
    } = this.state;
    return (
      <header className="source-filter-header">
        <h3>Filter sources</h3>
        <div>
          Category:
          <select value={selectedCategory} onChange={this.onCatChange}>
            {CATEGORIES.map( (catName, idx) => (
              <option key={`source-filter-category-${idx}`} value={catName}>
                {catName}
              </option>
            ))}
          </select>
        </div>
        <div>
          Country:
          <select value={selectedCountry} onChange={this.onCountryChange}>
            {COUNTRIES.map( (countryName, idx) => (
              <option key={`source-filter-country-${idx}`} value={countryName}>
                {countryName}
              </option>
            ))}
          </select>
        </div>
      </header>
    );
  }
}
