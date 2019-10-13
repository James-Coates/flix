import axios from 'axios';
import { apiUrl } from '../../config';

const login = async (username, password) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

const storeUser = (username, token) => {
  localStorage.setItem('user', username);
  localStorage.setItem('token', token);
};

export { login, storeUser };
