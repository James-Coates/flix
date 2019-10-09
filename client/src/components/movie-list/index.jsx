import React from 'react';

import FilterBar from '../filter-bar';
import MovieCard from '../movie-card';

import './movie-list.scss';

export default function MovieList({ movies }) {
  return (
    <div>
      <FilterBar />
      <h2 className="page-header">MOVIES</h2>
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={movie} key={movie._id} />)}
      </div>
    </div>
  );
}
