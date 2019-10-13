import axios from 'axios';
import { apiUrl } from '../../config';

const signup = async (user) => {
  try {
    const { username, password, email, birthday } = user;
    const response = await axios.post(`${apiUrl}/users`, {
      username,
      password,
      email,
      birthday,
    });
    return response.data;
  } catch (err) {
    return err;
    console.log(err);
  }
};

const storeUser = (user, token) => {
  localStorage.setItem('user', user);
  localStorage.setItem('token', token);
};

export { signup, storeUser };
