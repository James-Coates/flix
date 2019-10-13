import axios from 'axios';
import { apiUrl, setHeaderOptions } from '../../config';

const addUserFavourite = async (username, movieTitle, token) => {
  try {
    const headerOptions = setHeaderOptions(token);
    const response = await axios.post(`${apiUrl}/users/${username}/movies/${movieTitle}`, {}, headerOptions);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { addUserFavourite };
