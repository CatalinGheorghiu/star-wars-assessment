import { PersonDetails } from "@/services/api/characters/types";
import { sortFilmsByReleaseDate } from "@/utils/helpers.ts";

type FilmListProps = { characterDetails: PersonDetails };

const CharacterFilmList = ({ characterDetails }: FilmListProps) => {
  const descendentReleaseDateFilms = sortFilmsByReleaseDate(
    characterDetails.filmConnection.films
  );

  return (
    <div>
      <h2 className="text-xl md:text-2xl">
        List of titles in which{" "}
        <span className="text-amber-500">{characterDetails.name}</span> has
        appeared:
      </h2>

      <ul className="grid py-6 sm:grid-cols-2">
        {descendentReleaseDateFilms.map((film) => (
          <li
            key={film?.id}
            className="flex w-full flex-col gap-y-2 border-y border-slate-500 py-4 text-center"
          >
            <p className="text-amber-500">{film?.title}</p>
            <p className="pr-2">{film?.releaseDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterFilmList;
