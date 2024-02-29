import { gql } from "graphql-request";

export const paginatedCharacters = gql`
  query paginatedCharacters($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      people {
        homeworld {
          name
          id
        }
        name
        id
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
