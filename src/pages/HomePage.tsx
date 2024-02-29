import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import CharacterList from "@/components/character/CharacterList.tsx";
import Error from "@/components/Error.tsx";
import Spinner from "@/components/icons/Spinner.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import SearchInput from "@/components/SearchInput.tsx";
import { useAllCharactersQuery } from "@/hooks/useAllCharactersQuery.tsx";
import { usePaginatedCharactersQuery } from "@/hooks/usePaginatedCharactersQuery.tsx";
import { filterCharacterData } from "@/utils/helpers.ts";

const HomePage = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { ref, inView } = useInView();

  const {
    data: paginatedCharacters,
    isLoading: paginatedLoading,
    fetchNextPage,
    isFetchingNextPage,
    isError: paginatedError
  } = usePaginatedCharactersQuery();

  // Get all the characters when the input is not empty
  const { data: allCharacters, isError: allCharactersError } =
    useAllCharactersQuery(inputSearch.length > 0 && inputSearch !== " ");

  useEffect(() => {
    // Check if the DOM element bounded to the ref is in the view port
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const filteredData = useMemo(() => {
    return filterCharacterData(
      inputSearch,
      allCharacters?.allPeople.people || []
    );
  }, [inputSearch, allCharacters]);

  if (paginatedLoading) {
    return <Loading />;
  }

  if (paginatedError || allCharactersError) {
    return <Error />;
  }

  return (
    <Layout>
      <section className="mx-5 my-8 flex flex-col">
        <h1 className="text-center text-2xl md:text-3xl">
          All of your Star Wars favorite characters
        </h1>

        <SearchInput
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
        />

        <CharacterList
          filteredData={filteredData}
          paginatedCharacters={
            paginatedCharacters || { pages: [], pageParams: [] }
          }
        />

        <div ref={ref}>
          {isFetchingNextPage && (
            <div className="my-10 flex items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
