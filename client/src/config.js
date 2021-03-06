export const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://flix-db.herokuapp.com/api';

export const setHeaderOptions = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
