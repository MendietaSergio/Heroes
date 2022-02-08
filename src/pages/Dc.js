import React from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import {HeroeList} from '../components/HeroeList'
export const Dc = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <ul>
        <HeroeList publisher="DC Comics" />
        
      </ul>
      <hr />
    </div>
  );
};
