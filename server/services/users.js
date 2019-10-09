/* eslint-disable no-underscore-dangle */
const { User, Movie } = require('../models');

module.exports.getUsers = async () => {
  const users = await User.find();
  if (!users) {
    return { status: 404, response: 'No users found' };
  }
  return { status: 200, response: users };
};

module.exports.addUser = async (newUser) => {
  const { username, password, email, birthday } = newUser;
  const hashedPassword = User.hashPassword(password);
  const user = await User.findOne({ username });
  if (user) {
    return { status: 400, response: `${username} already exists` };
  }
  const addedUser = await User.create({
    username,
    password: hashedPassword,
    email,
    birthday,
  });
  return { status: 201, response: addedUser };
};

/* #TODO This is not the most efficient way of updating user as it has
    an extra api call */

module.exports.editUser = async (currentUsername, modifiedUser) => {
  const { username, password, email, birthday } = modifiedUser;
  const user = await User.findOne({ username: currentUsername });
  if (!user) {
    return { status: 400, response: `${currentUsername} not found` };
  }
  const userExists = await User.findOne({ username });
  if (userExists) {
    return { status: 400, response: `${userExists.username} already exists` };
  }
  const edittedUser = await User.findOneAndUpdate(
    { username: currentUsername },
    {
      $set: {
        username,
        password,
        email,
        birthday,
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
  );
  return { status: 200, response: edittedUser };
};

module.exports.addFavouriteMovie = async (username, movieTitle) => {
  const movie = await Movie.findOne({ title: movieTitle });
  if (!movie) {
    return { status: 404, response: `${movieTitle} not found` };
  }
  const editUser = await User.findOne({ username });
  if (!editUser) {
    return { status: 404, response: `${username} not found` };
  }
  // Check if movie already favourited
  const condition = editUser.favouriteMovies.findIndex((movieId) => movieId.equals(movie._id));
  if (!(condition === -1)) {
    return { status: 403, response: `${movieTitle} already favourited` };
  }
  const edittedUser = await User.findOneAndUpdate(
    { username },
    {
      $push: {
        favouriteMovies: movie._id,
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
  );
  return { status: 200, response: edittedUser };
};

module.exports.deleteUser = async (username) => {
  const user = await User.findOneAndDelete({ username });
  if (!user) {
    return { status: 404, response: `${username} does not exist` };
  }
  return { status: 200, response: user };
};
