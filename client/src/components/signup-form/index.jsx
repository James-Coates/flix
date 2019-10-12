import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { signup, storeUser } from './signup-methods';
import { login } from '../login-form/login-methods';

export default function LoginView({onLogin}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [toHome, setToHome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToAdd = { username, password, email, birthday };
    await signup(userToAdd);
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
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-input"
      />
      <input
        type="date"
        placeholder="Birthday"
        onChange={(e) => setBirthday(e.target.value)}
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
      >
        Cancel
      </button>
    </form>
  );
}
