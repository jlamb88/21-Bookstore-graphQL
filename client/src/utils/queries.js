export const GET_ME = gql`
query me ($email: String, $password: String) {
  me(email: $email, password: $password) {
    _id
    username
    email
    bookCount
    savedBooks {
      _id
      authors {
        name
      }
      bookId
      description
      image
      link
      title
    }
  }
}`
