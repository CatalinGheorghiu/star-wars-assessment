import { InfiniteData } from "@tanstack/react-query";

import CharacterCard from "@/components/character/CharacterCard.tsx";
import { AllPeople, Person } from "@/services/api/characters/types";

type CharacterListProps = {
  filteredData: Person[] | null | undefined;
  paginatedCharacters: InfiniteData<AllPeople, unknown> | undefined;
};

const CharacterList = ({
  filteredData,
  paginatedCharacters
}: CharacterListProps) => {
  const characters =
    filteredData ??
    paginatedCharacters?.pages.flatMap((page) => page.allPeople.people) ??
    [];

  return (
    <ul className="mt-4 grid grid-cols-3 items-center justify-center gap-8">
      {characters.map((person) => (
        <CharacterCard key={person?.id} person={person} />
      ))}
    </ul>
  );
};

export default CharacterList;
