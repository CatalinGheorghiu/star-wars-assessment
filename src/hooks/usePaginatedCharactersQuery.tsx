import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchCharacters } from "@/services/api/characters/requests/getPaginatedCharacters.ts";

export const usePaginatedCharactersQuery = () => {
  return useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: async ({ pageParam = "" }) => await fetchCharacters(pageParam),
    staleTime: 1000 * 60 * 6,
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage?.allPeople?.pageInfo.endCursor
  });
};
