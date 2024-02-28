import request from "graphql-request";

import { allCharacters } from "@/services/api/characters/queries/allCharacters.ts";
import { AllPeople } from "@/services/api/characters/types";

export const fetchAllCharacters = () =>
  request<AllPeople>(
    "https://swapi-graphql.netlify.app/.netlify/functions/index",
    allCharacters
  );
