import { useQuery } from "@tanstack/react-query";

import { fetchCharacter } from "@/services/api/characters/requests/getCharacter.ts";

export const useSingleCharacterQuery = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => fetchCharacter(id),
    staleTime: 1000 * 60 * 6
  });
};
