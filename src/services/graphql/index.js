import { gql } from '@apollo/client';

export  const GET_REPOS = gql`
query getRepos($language: String!) {
    search(query: $language, type: REPOSITORY, last: 12) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            description
            assignableUsers(first: 5) {
              edges {
                node {
                  ... on User {
                    name
                    avatarUrl
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;