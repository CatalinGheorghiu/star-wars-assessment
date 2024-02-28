import { PersonDetails } from "@/services/api/characters/types";

type CharacterDetailsProps = {
  characterDetails: PersonDetails;
};

const CharacterDetails = ({ characterDetails }: CharacterDetailsProps) => {
  return (
    <div>
      <h2 className="text-2xl">Character details:</h2>
      <ul className="py-6">
        <li className="flex">
          <p>Height: </p>
          <p> {characterDetails.height}</p>
        </li>
        <li className="flex">
          <p>Mass: </p>
          <p>{characterDetails.mass}</p>
        </li>
        <li className="flex">
          <p>Birth Year: </p>
          <p>{characterDetails.birthYear}</p>
        </li>
        <li className="flex">
          <p>Hair Color: </p>
          <p>{characterDetails.hairColor}</p>
        </li>
        <li className="flex">
          <p>Eye Color: </p>
          <p>{characterDetails.eyeColor}</p>
        </li>
        <li className="flex">
          <p>Home World: </p>
          <p> {characterDetails.homeworld?.name}</p>
        </li>
        <li className="flex">
          <p>Orbital period: </p>
          <p>{characterDetails.homeworld?.orbitalPeriod}</p>
        </li>
      </ul>
    </div>
  );
};

export default CharacterDetails;
