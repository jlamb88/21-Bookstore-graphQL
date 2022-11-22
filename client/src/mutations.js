import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
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
`