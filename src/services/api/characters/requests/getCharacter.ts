import request from "graphql-request";

import { character } from "@/services/api/characters/queries/singleCharacter.ts";
import { PersonDetails } from "@/services/api/characters/types";

export const fetchCharacter = (id: string) =>
  request<{ person: PersonDetails }>(
    "https://swapi-graphql.netlify.app/.netlify/functions/index",
    character,
    { personId: id }
  );
