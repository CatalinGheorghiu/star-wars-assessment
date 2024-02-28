import { PersonDetails } from "@/services/api/characters/types";
import { sortFilmsByReleaseDate } from "@/utils/helpers.ts";

type FilmListProps = { characterDetails: PersonDetails };

const FilmList = ({ characterDetails }: FilmListProps) => {
  if (!characterDetails) return;

  const descendentReleaseDateFilms = sortFilmsByReleaseDate(
    characterDetails.filmConnection.films
  );

  return (
    <div>
      <h2 className="text-2xl">
        List of titles in which{" "}
        <span className="text-amber-500">{characterDetails.name}</span> has
        appeared:
      </h2>
      <ul className="py-6">
        {descendentReleaseDateFilms.map((film) => (
          <li key={film?.id} className="flex">
            <p className="pr-2">{film?.releaseDate}:</p>
            <p>{film?.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
