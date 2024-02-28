import { gql } from "graphql-request";

export const allCharacters = gql`
  query AllCharacters {
    allPeople {
      people {
        homeworld {
          name
          id
        }
        name
        id
      }
    }
  }
`;
