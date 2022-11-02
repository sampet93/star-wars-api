export type People = {
  name: string;
  height: string;
  mass: string;
};
export type Starship = {
  name: string;
};
export type Planet = {
  name: string;
};
export type SearchData = People | Starship | Planet;

export interface ApplicationState {
  data: SearchData[];
  searchOption: SearchOptions;
  loading: boolean;
  error: string | null;
}

export enum SearchOptions {
  PEOPLE = "people",
  PLANET = "planets",
  STARSHIP = "starships",
}
