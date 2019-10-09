import React from 'react';

import Header from '../header';
import Footer from '../footer';

import './layout-main.scss';

export default function Layout({ children }) {
  return(
    <div className="wrapper-main">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
