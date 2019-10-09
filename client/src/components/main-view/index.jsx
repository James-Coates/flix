import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setMovies } from '../../actions';

import { getMovies } from './api';

import Layout from '../layout-main';
import MovieList from '../movie-list';
import LoginView from '../login-view';
import SignupView from '../signup-view';
import MovieView from '../movie-view';

class MainView extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     movies: [],
  //   };
  // }

  async componentDidMount() {
    const accessToken = localStorage.getItem('token');
    const movies = await getMovies(accessToken);
    // this.setState({ movies });
    this.props.setMovies(movies);
  }

  // async onLogin(accessToken) {
  //   const movies = await getMovies(accessToken);
  //   this.setState({ movies });
  // }

  render() {
    const { movies } = this.props;
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

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { setMovies })(MainView);
