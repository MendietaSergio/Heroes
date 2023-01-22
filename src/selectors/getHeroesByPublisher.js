import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  if (publisher === "Todos") {
    return heroes;
  } else {
    return heroes.filter((heroe) => heroe.publisher === publisher);
  }
};
