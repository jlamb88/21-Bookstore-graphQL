import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
        token
      user {
            _id
            bookCount
            email
        savedBooks {
                _id
                authors
                bookId
                description
                image
                link
                title
            }
            username
        }
    }
}`

export const ADD_USER = gql`
mutation addUser ($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }`

export const SAVE_BOOK = gql`
mutation saveBook($id: ID!, $content: savedBooks) {
  saveBook(_id: $id, content: $content) {
    _id
    bookCount
    email
    savedBooks {
      _id
      authors {
        name
      }
      bookId
      image
      description
      link
      title
    }
    username
  }
}`

export const REMOVE_BOOK = gql`
mutation removeBook ($id: ID!, $bookId: String) {
  removeBook(_id: $id, bookId: $bookId) {
    _id
    savedBooks {
      bookId
    }
  }
}`