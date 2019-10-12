import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './user-icon.scss';

export default function UserIcon({ user }) {
  return (
    <div className="user-icon__button">
      <p className="user-icon__text">Hi { user }</p>
      <div className="user-icon__box">
        <FontAwesomeIcon className="user-icon__img" icon={faUser} />
      </div>
    </div>
  );
}
