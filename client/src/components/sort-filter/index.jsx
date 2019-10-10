import React from 'react';
import { connect } from 'react-redux';

import { setSortColumn } from '../../actions';

import './sort-filter.scss';

function SortColumnInput({ setSortColumn, sortColumn }) {
  return (
    <select
      className="sort-filter"
      onChange={(e) => setSortColumn(e.target.value)}
      value={sortColumn}
    >
      {/* <option value="sort">Sort</option> */}
      <option value="title">Title</option>
      <option value="genre">Genre</option>
      <option value="director">Director</option>
    </select>
  );
}

export default connect(({ sortColumn }) => ({ sortColumn }), { setSortColumn })(SortColumnInput);
