import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, storeUser } from './login-methods';

function LoginForm({ onLogin, user, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toHome, setToHome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token, user } = await login(username, password);
    if (user) {
      storeUser(user.username, token);
      onLogin(user.username);
      setToHome(true);
    }
  };

  if (toHome) return <Redirect to="/" />;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="form-input"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-input"
      />
      <button
        variant="primary"
        type="submit"
        className="buttton button-primary"
      >
        Submit
      </button>
      <button
        variant="danger"
        type="button"
        className="buttton button-primary"
        onClick={() => setToHome(true)}
      >
        Cancel
      </button>
    </form>
  );
}

export default connect(({ user }) => ({ user }))(LoginForm);
