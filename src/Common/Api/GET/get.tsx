import { gql, useQuery } from "@apollo/client";


export const GET_BLOGCONFIG = gql`

query BlogConfig {
  blogConfig {
    logo
    siteName
    appBarListItems {
      id
      to
      label
      createdAt
      updatedAt
    }
    newsletter {
      id
      placeholder
      button
      title
      subtitle
      icon
      createdAt
      updatedAt
    }
    homeMainCards {
      background
      description
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
    id
  }
}
`
