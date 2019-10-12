import axios from 'axios';
import { apiURL, setHeaderOptions } from '../../config';

const addUserFavourite = async (username, movieTitle, token) => {
  try {
    const headerOptions = setHeaderOptions(token);
    console.log(headerOptions);
    const response = await axios.post(`${apiURL}/users/${username}/movies/${movieTitle}`, {}, headerOptions);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { addUserFavourite };
