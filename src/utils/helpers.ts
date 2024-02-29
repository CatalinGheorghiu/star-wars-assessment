import { Film, Person } from "@/services/api/characters/types";

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

/**
 * Filter character data based on the input search string.
 */
export const filterCharacterData = (
  inputSearch: string,
  characters: Person[]
) => {
  // If inputSearch is empty or characters is undefined, return an empty array
  if (inputSearch.length === 0 || !characters) {
    return [];
  }

  // Filter the characters based on the inputSearch
  return characters.filter(
    (person) =>
      person.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      (person.homeworld &&
        person.homeworld.name.toLowerCase().includes(inputSearch.toLowerCase()))
  );
};
