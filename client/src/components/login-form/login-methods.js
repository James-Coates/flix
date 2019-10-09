import axios from 'axios';

const login = async (username, password) => {
  try {
    const url = 'https://theflixdb.herokuapp.com/login';
    const response = await axios.post(url, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const storeUser = (username, token) => {
  localStorage.setItem('user', username);
  localStorage.setItem('token', token);
}

export { login, storeUser };
