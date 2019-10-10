import React from 'react';
import { connect } from 'react-redux';

import FilterBar from '../filter-bar';
import MovieCard from '../movie-card';

import { filterMovies, sortMovies } from './methods';

import './movie-list.scss';

const mapStateToProps = state => {
  const { visibilityFilter, sortColumn } = state;
  return { visibilityFilter, sortColumn };
};

function MovieList({ movies, visibilityFilter, sortColumn }) {
  const sortedFilteredMovies = sortMovies(filterMovies(movies, visibilityFilter), sortColumn);
  return (
    <div>
      <FilterBar />
      <h2 className="page-header">MOVIES</h2>
      <div className="movie-list">
        {sortedFilteredMovies.map((movie) => <MovieCard movie={movie} key={movie._id} />)}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(MovieList);
