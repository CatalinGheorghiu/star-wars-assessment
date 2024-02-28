export type AllPeople = {
  allPeople: {
    people: Person[];
    pageInfo: PageInfo;
  };
};

export type Person = {
  id: string;
  name: string;
  homeworld: Planet;
};

export type PersonDetails = {
  id: string;
  name: string;
  height: string;
  mass: number;
  hairColor: string;
  birthYear: string;
  eyeColor: string;
  homeworld: PlanetDetails;
  filmConnection: {
    films: Film[];
  };
};

export type Planet = {
  id: string;
  name: string;
};

export type PlanetDetails = Planet & { orbitalPeriod: string };

export type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

export type Film = {
  id: string;
  title: string;
  releaseDate: string;
};
