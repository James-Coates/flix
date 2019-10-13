import axios from 'axios';
import { apiUrl, setHeaderOptions } from '../../config';

const getUser = async (username, token) => {
  try {
    if (!token) {
      return {};
    }
    const headerOptions = setHeaderOptions(token);
    const response = await axios.get(`${apiUrl}/users/${username}`, headerOptions);
    const user = response.data;
    if (user) {
      return user;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

const editUser = async (currentUsername, user, token) => {
  try {
    const { username, email, birthday } = user;
    const headerOptions = setHeaderOptions(token);
    const response = await axios.put(`${apiUrl}/users/${currentUsername}`, {
      username,
      email,
      birthday,
    }, headerOptions);
    const modifiedUser = response.data;
    if (modifiedUser) {
      return modifiedUser;
    }
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export { getUser, editUser };
