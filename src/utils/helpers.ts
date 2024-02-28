import { Film } from "@/services/api/characters/types";

/**
 * Format a string for URL use.
 * Replaces spaces with hyphens and converts to lowercase.
 */
export const formatStringForUrl = (str: string) => {
  return str?.toLowerCase().split(" ").join("-");
};

/**
 * Sort films by release date in descending order.
 */
export const sortFilmsByReleaseDate = (films: Film[]) =>
  films?.sort((a, b) => {
    // If either film's release date is missing, move it to the end
    if (!a?.releaseDate || !b?.releaseDate) return 1;

    return (
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  });
