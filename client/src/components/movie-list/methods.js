const filterMovies = (movieArray, query) => {
  const lcQuery = query.toLowerCase();
  return movieArray.filter((movie) => movie.title.toLowerCase().includes(lcQuery));
};

const sortMovies = (movieArray, sortBy) => {
  return movieArray.concat().sort((a, b) => {
    const aCompare = sortBy === 'title' ? a[sortBy] : a[sortBy].name;
    const bCompare = sortBy === 'title' ? b[sortBy] : b[sortBy].name;

    if (aCompare.toLowerCase() < bCompare.toLowerCase()) return -1;
    if (aCompare.toLowerCase() > bCompare.toLowerCase()) return 1;
    return 0;
  });
};

export { filterMovies, sortMovies };
