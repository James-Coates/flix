import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

import Layout from '../layout-main';

import './movie-view.scss';

export default function MovieView({ movie }) {
  const { title, imagePath, genre, description, director } = movie;
  return (
    <Layout>
      <div className="movie-view">
        <div className="movie-view__imageBox">
          <img className="movie-view__image" src={imagePath} alt="movie poster" />
        </div>
        <div className="movie-view__body">
          <h2 className="movie-view__title">
            {title}
          </h2>
          <h3 className="movie-view__genre">
            <Link to="/genre/:name">{genre.name}</Link>
          </h3>
          <p className="movie-view__description">
            {description}
          </p>
          <h3 className="movie-view__director">
            <Link to="/director/:name">{director.name}</Link>
          </h3>
        </div>
      </div>
    </Layout>
  );
}
