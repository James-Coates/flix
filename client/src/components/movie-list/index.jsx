import React from 'react';
import { connect } from 'react-redux';

import FilterBar from '../filter-bar';
import MovieCard from '../movie-card';

import { filterMovies } from './methods';

import './movie-list.scss';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MovieList({ movies, visibilityFilter }) {
  const filteredMovies = filterMovies(movies, visibilityFilter);
  return (
    <div>
      <FilterBar />
      <h2 className="page-header">MOVIES</h2>
      <div className="movie-list">
        {filteredMovies.map((movie) => <MovieCard movie={movie} key={movie._id} />)}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(MovieList);
