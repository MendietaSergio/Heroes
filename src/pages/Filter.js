import React from "react";

import { HeroeList } from "../components/HeroeList";
export const Filter = ({params}) => {
  return (
    <div>
      <h1>{params}</h1>
      <hr />
      <HeroeList publisher={params} />
      <hr />
    </div>
  );
};
