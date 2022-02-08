import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    //mensaje de error
    throw new Error(`Publisher ${publisher} no válido. ${validPublisher}`);
  } else {
    return heroes.filter((heroe) => heroe.publisher === publisher);
  }
};
