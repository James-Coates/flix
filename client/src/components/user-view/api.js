import axios from 'axios';
import moment from 'moment';

const apiUrl = 'http://localhost:3000/';

const getUser = async (username, token) => {
  try {
    if (!token) {
      return {};
    }
    const headerOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${apiUrl}users/${username}`, headerOptions);
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
    const headerOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(`${apiUrl}users/${currentUsername}`, {
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
