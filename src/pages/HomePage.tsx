import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import CharacterCard from "@/components/character/CharacterCard.tsx";
import Error from "@/components/Error.tsx";
import Search from "@/components/icons/Search.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import { graphql } from "@/gql";

const paginatedCharacters = graphql(`
  query PaginatedPeople($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      people {
        homeworld {
          name
          id
        }
        name
        id
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);

const allCharacters = graphql(`
  query AllPeople {
    allPeople {
      people {
        homeworld {
          name
          id
        }
        name
        id
      }
    }
  }
`);

const HomePage = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { ref, inView } = useInView();

  const fetchCharacters = (pageParam: string) =>
    request(
      "https://swapi-graphql.netlify.app/.netlify/functions/index",
      paginatedCharacters,
      { first: 10, after: pageParam }
    );

  const fetchAllCharacters = () =>
    request(
      "https://swapi-graphql.netlify.app/.netlify/functions/index",
      allCharacters
    );

  const { data, isLoading, fetchNextPage, isFetchingNextPage, isError } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: ({ pageParam = "" }) => fetchCharacters(pageParam),
      staleTime: 1000 * 60 * 6,
      initialPageParam: "",
      getNextPageParam: (lastPage) => lastPage?.allPeople?.pageInfo.endCursor
    });

  const { data: allData } = useQuery({
    queryKey: ["allCharacters"],
    queryFn: fetchAllCharacters,
    staleTime: 1000 * 60 * 6,
    enabled: inputSearch.length > 0 && inputSearch !== " "
  });

  const filteredData =
    inputSearch.length > 0
      ? allData?.allPeople?.people?.filter(
          (person) =>
            person?.name
              ?.toLocaleLowerCase()
              .includes(inputSearch.toLowerCase()) ||
            person?.homeworld?.name
              ?.toLocaleLowerCase()
              .includes(inputSearch.toLowerCase())
        )
      : null;

  useEffect(() => {
    if (inView) {
      void fetchNextPage().then((r) => r);
    }
  }, [data, fetchNextPage, inView]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Layout>
      <section className="flex flex-col p-20">
        <h1 className="text-3xl">Characters</h1>

        <div>
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search by name or planet
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <Search />
            </div>

            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search by planet or name"
              required
              value={inputSearch}
              onChange={(event) => setInputSearch(event.target.value)}
            />
          </div>
        </div>

        <ul className="mt-4 grid grid-cols-3 items-center justify-center gap-8">
          {!filteredData
            ? data?.pages.map((page) => {
                return page.allPeople?.people?.map((person) => (
                  <CharacterCard key={person?.id} person={person} />
                ));
              })
            : filteredData.map((person) => (
                <CharacterCard key={person?.id} person={person} />
              ))}
        </ul>

        {!filteredData && (
          <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
        )}
      </section>
    </Layout>
  );
};

export default HomePage;

/*
 * TODO:
 *  - Split reusable components
 *  - Style
 *  - Types
 *
 * */
