import React from 'react';

import LayoutForm from '../layout-form';
import LoginForm from '../login-form';

export default function LoginView({ onLogin }) {

  return (
    <LayoutForm>
      <div className="login__ui">
        <div>
          <h1 className="form-head">Log In</h1>
          <p>Log in to continue to theFLIXdb.</p>
        </div>
        <div className="login__form">
          <LoginForm onLogin={onLogin} />
        </div>
      </div>
    </LayoutForm>
  );
}
