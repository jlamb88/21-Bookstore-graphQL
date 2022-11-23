const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth')

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    me: async (parent, { _id, username }) => {
      return await User.findOne({
        $or: [{ _id }, { username }],
      })
    }
  },

  Mutation: {
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user with this username or email");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user)
      return { token, user }
    },

    saveBook: async (parent, { _id, savedBooks }) => {
      return await User.findOneAndUpdate(
        { _id },
        { $addToSet: { savedBooks } },
        { new: true }
      )
    },
    removeBook: async (parent, { bookId }) => {
      return await User.findOneAndUpdate(
        { bookId },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      )
    }
  }
}
module.exports = resolvers;
