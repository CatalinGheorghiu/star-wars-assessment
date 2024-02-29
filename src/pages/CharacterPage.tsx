import { Link, useParams } from "react-router-dom";

import CharacterDetails from "@/components/character/CharacterDetails.tsx";
import CharacterFilmList from "@/components/character/CharacterFilmList.tsx";
import Error from "@/components/Error.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import { useSingleCharacterQuery } from "@/hooks/useSingleCharacterQuery.tsx";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: characterDetails,
    isLoading,
    isError
  } = useSingleCharacterQuery(id ?? "");

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !characterDetails) {
    return <Error />;
  }

  return (
    <Layout>
      <Link
        to="/"
        className="mx-5 flex max-w-fit items-center rounded-3xl transition-all delay-300 ease-in-out hover:border-amber-500 hover:bg-white hover:text-black"
      >
        <span className="mr-2 text-3xl">&#8592;</span> Back
      </Link>

      <section className="mx-5 flex flex-col gap-y-4 py-10 md:gap-y-10">
        <CharacterDetails characterDetails={characterDetails.person} />
        <CharacterFilmList characterDetails={characterDetails.person} />
      </section>
    </Layout>
  );
};

export default CharacterPage;
