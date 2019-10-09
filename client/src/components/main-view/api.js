import axios from 'axios';

const apiUrl = 'https://theflixdb.herokuapp.com';

const getMovies = async (token) => {
  try {
    if (!token) {
      return [];
    }
    const headerOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${apiUrl}/movies`, headerOptions);
    return response.data;
  } catch (err) {
    return err;
  }
};

export { apiUrl, getMovies };
