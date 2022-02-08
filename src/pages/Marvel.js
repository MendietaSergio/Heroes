import React from "react";

import { HeroeList } from "../components/HeroeList";
export const Marvel = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <hr />

      <HeroeList publisher="Marvel Comics" />

      <hr />
    </div>
  );
};
