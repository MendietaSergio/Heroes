import { heroes } from "../data/heroes";
export const getHeroesBySearch = (keyword = "") => {
  return heroes.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );
};
