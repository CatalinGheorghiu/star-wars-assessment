import request from "graphql-request";

import { paginatedCharacters } from "@/services/api/characters/queries/paginatedCharacters.ts";
import { AllPeople } from "@/services/api/characters/types";

export const fetchCharacters = (pageParam: string) =>
  request<AllPeople>(import.meta.env.VITE_BASE_URL, paginatedCharacters, {
    first: 10,
    after: pageParam
  });
