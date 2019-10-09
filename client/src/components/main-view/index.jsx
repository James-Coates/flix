import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getMovies } from './api';

import Layout from '../layout-main';
import MovieList from '../movie-list';
import LoginView from '../login-view';
import SignupView from '../signup-view';
import MovieView from '../movie-view';

export default class MainView extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const accessToken = localStorage.getItem('token');
    const movies = await getMovies(accessToken);
    this.setState({ movies });
  }

  async onLogin(accessToken) {
    const movies = await getMovies(accessToken);
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <MovieList movies={movies} />
            </Layout>
          </Route>
          <Route path="/login" render={() => <LoginView onLogin={(accessToken) => this.onLogin(accessToken)} />} />
          <Route path="/signup" component={SignupView} />
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
