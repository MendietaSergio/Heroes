import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
    //usememo, es parecido a useEffect, pero si el estado no cambia evita refrescar la página
    //detecta, que al cambiar el estado, refresque, pero si no cambia no refresca
  const heroes = useMemo (() => getHeroesByPublisher(publisher), [publisher])
  return (
    <div className="row">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
