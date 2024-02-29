import { Link } from "react-router-dom";

import PlaceholderImage from "@/assets/SW_placeholder.webp";
import { Person } from "@/services/api/characters/types";

type CharacterCardProps = {
  person: Person;
};

const CharacterCard = ({ person }: CharacterCardProps) => {
  return (
    <li className="max-h-[384[x] flex h-full w-full cursor-pointer flex-col gap-y-4">
      <Link to={`/character/${person.id}}`} className="flex h-full flex-col">
        <img
          src={PlaceholderImage}
          alt="Star Wars Placeholder Image"
          className="rounded-t-lg"
        />

        <div className="relative h-full border-b border-b-transparent bg-[#1d1e1f] p-4">
          <p className="flex items-center gap-x-2">
            <span>Name:</span>
            <span className="text-amber-500">{person.name}</span>
          </p>

          <p className="flex items-center gap-x-2">
            <span>Planet:</span>
            <span className="text-amber-500">{person?.homeworld?.name}</span>
          </p>

          <div className="absolute -bottom-3.5 left-0 z-[1] block h-3.5 w-full overflow-hidden rounded-b-lg bg-transparent before:absolute before:bottom-0 before:left-0 before:top-auto before:z-[-2] before:block before:w-1/2 before:border-r-[14px] before:border-t-[14px] before:border-[#1D1E1F] before:border-r-transparent before:content-[''] after:absolute after:bottom-0 after:right-0 after:top-auto after:z-[-2] after:block after:w-[18%] after:border-l-[14px] after:border-t-[14px] after:border-[#1D1E1F] after:border-l-transparent after:content-['']" />
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;
