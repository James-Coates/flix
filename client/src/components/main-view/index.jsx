import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setMovies, setUser } from '../../actions';

import { getMovies } from './api';

import Layout from '../layout-main';
import MovieList from '../movie-list';
import LoginView from '../login-view';
import SignupView from '../signup-view';
import MovieView from '../movie-view';
import UserView from '../user-view';

class MainView extends Component {
  
  async componentDidMount() {
    const { setMovies, setUser } = this.props;
    const accessToken = localStorage.getItem('token');
    const localUser = localStorage.getItem('user');
    if (localUser && accessToken) {
      setUser(localUser);
      const movies = await getMovies(accessToken);
      setMovies(movies);
    }
  }

  async onLogin(username) {
    const { setMovies, setUser } = this.props;
    const accessToken = localStorage.getItem('token');
    const movies = await getMovies(accessToken);
    setMovies(movies);
    setUser(username);
  }

  render() {
    const { movies } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/login" render={() => <LoginView onLogin={(username) => this.onLogin(username)} />} />
          <Route path="/signup" render={() => <SignupView onLogin={(username) => this.onLogin(username)} />} />
          <Route
            path="/users/:username"
            render={({match}) => (
              <UserView userP={match.params.username} />
            )}
          />
          <Route
            path="/movies/:movieTitle"
            render={({ match }) => (
              <MovieView movie={movies.find((m) => m.title === match.params.movieTitle)} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default connect(({ movies, user }) => ({ movies, user }), { setMovies, setUser })(MainView);
