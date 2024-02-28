import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { Link, useParams } from "react-router-dom";

import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import { graphql } from "@/gql";

type ParamType = {
  id: string;
  name: string;
};

const character = graphql(`
  query Person($personId: ID) {
    person(id: $personId) {
      name
      id
      height
      mass
      hairColor
      birthYear
      eyeColor
      homeworld {
        name
        orbitalPeriod
      }
      filmConnection {
        films {
          id
          title
          releaseDate
        }
      }
    }
  }
`);

const CharacterPage = () => {
  const { id } = useParams<ParamType>();

  const { data, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        character,
        { personId: id }
      ),
    staleTime: 1000 * 60 * 6
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <div>There is no data to display</div>;
  }

  const films = data?.person?.filmConnection?.films || [];
  const descendentReleaseDateFilms = films?.sort((a, b) => {
    if (!a?.releaseDate || !b?.releaseDate) return 1;

    return (
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  });

  return (
    <Layout>
      <Link
        to="/"
        className="flex max-w-fit items-center rounded-3xl border px-10 py-2 transition-all delay-300 ease-out hover:border-amber-500 hover:bg-white hover:text-black"
      >
        <span className="mr-2 text-3xl">&#8592;</span> Back
      </Link>

      <section className="flex flex-col py-10">
        <div>
          <h2 className="text-2xl">Character details:</h2>
          <ul className="py-6">
            <li className="flex">
              <p>Height: </p>
              <p> {data?.person?.height}</p>
            </li>
            <li className="flex">
              <p>Mass: </p>
              <p>{data?.person?.mass}</p>
            </li>
            <li className="flex">
              <p>Birth Year: </p>
              <p>{data?.person?.birthYear}</p>
            </li>
            <li className="flex">
              <p>Hair Color: </p>
              <p>{data?.person?.hairColor}</p>
            </li>
            <li className="flex">
              <p>Eye Color: </p>
              <p>{data?.person?.eyeColor}</p>
            </li>
            <li className="flex">
              <p>Home World: </p>
              <p> {data?.person?.homeworld?.name}</p>
            </li>
            <li className="flex">
              <p>Orbital period: </p>
              <p>{data?.person?.homeworld?.orbitalPeriod}</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl">
            List of titles in which{" "}
            <span className="text-amber-500">{data?.person?.name}</span> has
            appeared:
          </h2>
          <ul className="py-6">
            {descendentReleaseDateFilms &&
              descendentReleaseDateFilms.map((film) => (
                <li key={film?.id} className="flex">
                  <p className="pr-2">{film?.releaseDate}:</p>
                  <p>{film?.title}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default CharacterPage;
