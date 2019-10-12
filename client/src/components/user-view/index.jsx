import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Moment from 'react-moment';

import Layout from '../layout-main';
import MovieCard from '../movie-card';

import { setUser } from '../../actions';

import { getUser, editUser } from './api';

import './user-view.scss';

const moviesF = [1, 2, 3, 4];

function UserView({ userP, user, movies, setUser }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchUser = async () => {
      const user = await getUser(userP, token);
      setUsername(user.username);
      setEmail(user.email);
      setBirthday(moment(user.birthday).format('YYYY-MM-DD'));
      setFavouriteMovies(user.favouriteMovies);
    };
    fetchUser();
  }, []);

  const cancelEdit = () => {
    const token = localStorage.getItem('token');
    const fetchUser = async () => {
      const user = await getUser(userP, token);
      setUsername(user.username);
      setEmail(user.email);
      setBirthday(moment(user.birthday).format('YYYY-MM-DD'));
    };
    fetchUser();
    setEdit(!edit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUsername = localStorage.getItem('user');
    const userX = { username, email, birthday };
    const token = localStorage.getItem('token');
    const modifiedUser = await editUser(currentUsername, userX, token);
    setUsername(modifiedUser.username);
    setEmail(modifiedUser.email);
    setBirthday(moment(modifiedUser.birthday).format('YYYY-MM-DD'));
    setUser(modifiedUser.username);
    localStorage.setItem('user', modifiedUser.username);
    setEdit(!edit);
  };

  const returnMovieComponents = (movieIdArray) => {
    const movieComponentArray = movieIdArray.map((movieId) => {
      const movieObject = movies.find((movie) => movieId === movie._id);
      return <MovieCard movie={movieObject} key={movieId} />;
    });
    return movieComponentArray
  };

  if (!username) return null;
  return (
    <Layout>
      <div className="user-view">
        <div className="profile-image__section">
          <div className="profile-image">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </div>
        </div>
        { !edit ? (
          <div className="profile-body">
            <h3 className="page-header">User Details</h3>
            <button className="button-primary" type="button" onClick={() => setEdit(!edit)}>Edit User</button>
            <h3 className="profile-details__label">Username</h3>
            <div className="profile-details__box" onDoubleClick={() => setEdit(!edit)}>
              <h4 className="profile-details">{ username }</h4>
            </div>
            <h3 className="profile-details__label">Email</h3>
            <div className="profile-details__box">
              <h4 className="profile-details">{ email }</h4>
            </div>
            <h3 className="profile-details__label">Date of Birth</h3>
            <div className="profile-details__box">
              <h4 className="profile-details">
                <Moment parse="YYYY-MM-DD" format="DD/MM/YYYY">{ birthday }</Moment>
              </h4>
            </div>
          </div>
        ) : (
          <div className="profile-body">
            <h3 className="page-header">User Details</h3>
            <button className="button-primary" type="button" onClick={cancelEdit}>
              Cancel
            </button>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h3 className="profile-details__label">Username</h3>
              <input
                className="profile-details__box"
                type="username"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <h3 className="profile-details__label">Email</h3>
              <input
                className="profile-details__box"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className="profile-details__label">Date of Birth</h3>
              <input
                className="profile-details__box"
                type="date"
                value={birthday}
                placeholder="Date of Birth"
                onChange={(e) => setBirthday(e.target.value)}
              />
              <button type="submit" className="button-primary">
                Submit
              </button>
            </form>
          </div>
        ) }
        <div className="favourite-movies">
          { favouriteMovies ? (
            returnMovieComponents(favouriteMovies)
          ) : (
            null
          )}
        </div>
      </div>
    </Layout>
  );
}

export default connect(({ user, movies }) => ({ user, movies }), { setUser })(UserView);
