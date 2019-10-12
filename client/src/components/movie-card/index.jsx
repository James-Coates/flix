import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { addUserFavourite } from './api';

import './movie-card.scss';

export default function MovieCard({ movie }) {
  const { _id, title, imagePath } = movie;

  const handleFav = async () => {
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const response = await addUserFavourite(username, title, token);
    console.log(response);
  };

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
        <button className="button-fav" type="button" onClick={handleFav}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
}
