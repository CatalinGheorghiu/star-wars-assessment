import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import CharacterList from "@/components/character/CharacterList.tsx";
import Error from "@/components/Error.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import SearchInput from "@/components/SearchInput.tsx";
import { useAllCharactersQuery } from "@/hooks/useAllCharactersQuery.tsx";
import { usePaginatedCharactersQuery } from "@/hooks/usePaginatedCharactersQuery.tsx";

const HomePage = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { ref, inView } = useInView();

  const {
    data: paginatedCharacters,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isError
  } = usePaginatedCharactersQuery();

  const { data: allCharacters } = useAllCharactersQuery(
    inputSearch.length > 0 && inputSearch !== " "
  );

  const filteredData =
    inputSearch.length > 0
      ? allCharacters?.allPeople.people.filter(
          (person) =>
            person.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
            person.homeworld.name
              .toLowerCase()
              .includes(inputSearch.toLowerCase())
        )
      : null;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

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

        <SearchInput
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
        />

        {!isLoading && !isError && (
          <CharacterList
            filteredData={filteredData}
            paginatedCharacters={paginatedCharacters}
          />
        )}
        <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
      </section>
    </Layout>
  );
};

export default HomePage;
