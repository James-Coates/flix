import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MainView from './components/main-view';

import moviesApp from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const store = createStore(moviesApp);

function Flix() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  )
}

ReactDOM.render(<Flix />, document.getElementById('root'));
