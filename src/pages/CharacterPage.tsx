import { Link, useParams } from "react-router-dom";

import CharacterDetails from "@/components/character/CharacterDetails.tsx";
import FilmList from "@/components/character/FilmList.tsx";
import Error from "@/components/Error.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import { useSingleCharacterQuery } from "@/hooks/useSingleCharacterQuery.tsx";

const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return;

  const {
    data: characterDetails,
    isLoading,
    isError
  } = useSingleCharacterQuery(id);

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
        className="flex max-w-fit items-center rounded-3xl border px-10 py-2 transition-all delay-300 ease-out hover:border-amber-500 hover:bg-white hover:text-black"
      >
        <span className="mr-2 text-3xl">&#8592;</span> Back
      </Link>

      <section className="flex flex-col py-10">
        <CharacterDetails characterDetails={characterDetails.person} />
        <FilmList characterDetails={characterDetails.person} />
      </section>
    </Layout>
  );
};

export default CharacterPage;
