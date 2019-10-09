import React from 'react';

import './filter-bar.scss';

export default function filterBar() {
  return (
    <div className="filter-bar">
      <input type="search" className="search" placeholder="Seach..." />
      <select type="dr" className="filter">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  )
}
