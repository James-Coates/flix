import axios from 'axios';

const signup = async (user) => {
  try {
    const { username, password, email, birthday } = user;
    const url = 'https://theflixdb.herokuapp.com/users';
    const response = await axios.post(url, {
      username,
      password,
      email,
      birthday,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const storeUser = (user, token) => {
  localStorage.setItem('user', user);
  localStorage.setItem('token', token);
}

export { signup, storeUser };
