import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';

import NavButton from '../nav-button';

import './header.scss';

export default function Header() {
  const logOut = () => localStorage.clear();
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <h1 className="header-logo__text">FLIX</h1>
        </Link>
      </div>
      <div className="menu">
        <NavButton title="Sign in" link="/login" />
        <NavButton title="Sign up" link="/signup" />
        <NavButton title="Sign out" action={logOut} />
      </div>
    </div>
  );
}
