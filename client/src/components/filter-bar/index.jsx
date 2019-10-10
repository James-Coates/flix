import React from 'react';

import SearchFilter from '../search-filter';
import SortFilter from '../sort-filter';

import './filter-bar.scss';

export default function filterBar() {
  return (
    <div className="filter-bar">
      <SearchFilter />
      <SortFilter />
    </div>
  );
}
