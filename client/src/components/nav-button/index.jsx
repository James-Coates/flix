import React from 'react';
import { Link } from 'react-router-dom';

import './nav-button.scss';

export default function NavButton({ title, link, action }) {
  if (link) {
    return (
      <Link to={link} className="nav-button">
        {title}
      </Link>
    );
  }
  return (
    <button type="button" className="nav-button" onClick={action}>
      {title}
    </button>
  );
}
