import React from 'react';
import { Link } from 'react-router-dom';

import './movie-card.scss';

export default function MovieCard({ movie }) {
  const { _id, title, imagePath } = movie;
  return (
    <div className="movie-card">
      <Link to={`/movies/${title}`}>
        <div className="movie-card__image-cont">
          <img className="movie-card__image" src={imagePath} alt="movie poster" />
        </div>
      </Link>
      <div className="movie-card__body">
        <h3 className="movie-card__title">
          {title}
        </h3>
      </div>
    </div>
  );
}
