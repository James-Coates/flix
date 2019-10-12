export const apiURL = 'http://localhost:3000';

export const setHeaderOptions = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
