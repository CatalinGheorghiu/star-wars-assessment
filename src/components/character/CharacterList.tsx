import { InfiniteData } from "@tanstack/react-query";

import CharacterCard from "@/components/character/CharacterCard.tsx";
import { AllPeople, Person } from "@/services/api/characters/types";

type CharacterListProps = {
  filteredData: Person[];
  paginatedCharacters: InfiniteData<AllPeople, unknown>;
};

const CharacterList = ({
  filteredData,
  paginatedCharacters
}: CharacterListProps) => {
  const characters =
    filteredData?.length > 0
      ? filteredData
      : paginatedCharacters?.pages.flatMap((page) => page.allPeople.people);

  return (
    <ul className="mt-4 grid grid-cols-1 justify-center justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-y-14 lg:grid-cols-3">
      {characters.map((person) => (
        <CharacterCard key={person?.id} person={person} />
      ))}
    </ul>
  );
};

export default CharacterList;
