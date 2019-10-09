const filterMovies = (movieArray, query) => {
  const lcQuery = query.toLowerCase();
  return movieArray.filter((movie) => movie.title.toLowerCase().includes(lcQuery));
}

export { filterMovies };