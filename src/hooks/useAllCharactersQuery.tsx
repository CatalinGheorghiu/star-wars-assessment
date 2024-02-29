import { useQuery } from "@tanstack/react-query";

import { fetchAllCharacters } from "@/services/api/characters/requests/getAllCharacters.ts";

export const useAllCharactersQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: ["allCharacters"],
    queryFn: fetchAllCharacters,
    enabled
  });
};
