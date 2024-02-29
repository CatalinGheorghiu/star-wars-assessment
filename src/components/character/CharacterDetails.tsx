import { PersonDetails } from "@/services/api/characters/types";

type CharacterDetailsProps = {
  characterDetails: PersonDetails;
};

const CharacterDetails = ({ characterDetails }: CharacterDetailsProps) => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl">Character details:</h2>

      <ul className="grid grid-cols-2 py-6">
        <li className="flex flex-col gap-y-2 border-t border-gray-500 p-2">
          <p>Height</p>
          <p className="text-amber-500">{characterDetails.height}</p>
        </li>
        <li className="flex flex-col gap-y-2 border border-gray-500 p-2">
          <p>Mass</p>
          <p className="text-amber-500">{characterDetails.mass}</p>
        </li>
        <li className="flex flex-col gap-y-2 border-t border-slate-500 p-2">
          <p>Birth Year</p>
          <p className="text-amber-500">{characterDetails.birthYear}</p>
        </li>
        <li className="flex flex-col gap-y-2 border border-gray-500 p-2">
          <p>Hair Color</p>
          <p className="capitalize text-amber-500">
            {characterDetails.hairColor}
          </p>
        </li>
        <li className="flex flex-col gap-y-2 border-t border-gray-500 p-2">
          <p>Eye Color</p>
          <p className="capitalize text-amber-500">
            {characterDetails.eyeColor}
          </p>
        </li>
        <li className="flex flex-col gap-y-2 border border-gray-500 p-2">
          <p>Home World</p>
          <p className="text-amber-500">{characterDetails.homeworld?.name}</p>
        </li>
        <li className="flex flex-col gap-y-2 border border-gray-500 border-l-transparent p-2">
          <p>Orbital period</p>
          <p className="text-amber-500">
            {characterDetails.homeworld?.orbitalPeriod}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CharacterDetails;
