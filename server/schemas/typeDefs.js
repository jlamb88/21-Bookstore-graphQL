const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [Author]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Author {
    name: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input savedBooks {
    _id: ID
    authors: [String]
    description: String!
    title: String!
    bookId: String
    image: String
    link: String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
     me(email: String, password: String): User
  }

  type Mutation {
    loginUser (email: String, 
          password: String)
          : Auth
    addUser (username: String,
            email: String,
            password: String)
            : Auth
    saveBook (_id: ID!, content: savedBooks)
    : User
    removeBook (_id: ID!, bookId: String): User
  }
`;

module.exports = typeDefs;
