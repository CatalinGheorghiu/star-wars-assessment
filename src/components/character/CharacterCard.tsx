import { Link } from "react-router-dom";

import { Person } from "@/services/api/characters/types";

type CharacterCardProps = {
  person: Person;
};

const CharacterCard = ({ person }: CharacterCardProps) => {
  return (
    <li className="h-52 w-full cursor-pointer flex-col gap-y-4 rounded-md border border-white">
      {person?.name && (
        <Link
          to={`/character/${person.id}}`}
          className="flex h-full flex-col p-4"
        >
          <p className="flex items-center gap-x-2">
            <span>Name:</span>
            <span className="text-sm text-orange-400">{person.name}</span>
          </p>

          <p className="flex items-center gap-x-2">
            <span>Planet:</span>
            <span className="text-sm text-teal-500">
              {person?.homeworld?.name}
            </span>
          </p>
        </Link>
      )}
    </li>
  );
};

export default CharacterCard;
