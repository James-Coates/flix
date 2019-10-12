import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserIcon from '../user-icon';
import NavButton from '../nav-button';

import './header.scss';

function Header({ user }) {
  const logOut = () => {
    localStorage.clear();
    document.location.reload();
  };
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <h1 className="header-logo__text">FLIX</h1>
        </Link>
      </div>
      {user ? (
        <div className="menu">
          <Link to={`/users/${user}`}>
            <UserIcon user={user} />
          </Link>
          <NavButton title="Sign out" action={logOut} />
        </div>
      ) : (
        <div className="menu">
          <NavButton title="Sign in" link="/login" />
          <NavButton title="Sign up" link="/signup" />
        </div>
      )}
    </div>
  );
}

export default connect(({ user }) => ({ user }))(Header);
