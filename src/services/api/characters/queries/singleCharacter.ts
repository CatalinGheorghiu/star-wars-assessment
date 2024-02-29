import { gql } from "graphql-request";

export const character = gql`
  query Person($personId: ID) {
    person(id: $personId) {
      name
      id
      height
      mass
      hairColor
      birthYear
      eyeColor
      homeworld {
        name
        orbitalPeriod
      }
      filmConnection {
        films {
          id
          title
          releaseDate
        }
      }
    }
  }
`;
