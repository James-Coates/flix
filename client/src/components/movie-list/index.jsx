import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../layout-main';
import FilterBar from '../filter-bar';
import MovieCard from '../movie-card';

import { filterMovies, sortMovies } from './methods';

import './movie-list.scss';

const mapStateToProps = state => {
  const { movies, visibilityFilter, sortColumn } = state;
  return { movies, visibilityFilter, sortColumn };
};

function MovieList({ movies, visibilityFilter, sortColumn }) {
  const sortedFilteredMovies = sortMovies(filterMovies(movies, visibilityFilter), sortColumn);
  if (!movies.length) {
    return (
      <Layout>
        <FilterBar />
        <h2 className="page-header">Sign up or login to continue</h2>
      </Layout>
    );
  }
  return (
    <Layout>
      <FilterBar />
      <h2 className="page-header">MOVIES</h2>
      <div className="movie-list">
        {sortedFilteredMovies.map((movie) => <MovieCard movie={movie} key={movie._id} />)}
      </div>
    </Layout>
  );
}

export default connect(mapStateToProps)(MovieList);
