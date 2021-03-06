const whiteList = [
  'http://localhost:3000',
  'http://localhost:1234',
  'http://flix-db.herokuapp.com',
  'https://flix-db.herokuapp.com',
];
module.exports = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (whiteList.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
};
