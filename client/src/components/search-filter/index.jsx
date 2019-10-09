import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../../actions';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function SearchFilter(props) {
  return (
    <input
      type="search"
      className="search"
      placeholder="Seach..."
      onChange={(e) => props.setFilter(e.target.value)}
      value={props.visibilityFilter}
    />
  );
}

export default connect(mapStateToProps, { setFilter })(SearchFilter);
