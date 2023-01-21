import React from "react";
import { Routes, Route } from "react-router-dom";
import { Filter } from "../pages/Filter.js";
import { Search } from "../pages/Search.js";
import { Heroe } from "../pages/Heroe.js";
import { Navbar } from "../components/Navbar.js";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/marvel" element={<Filter params={"Marvel Comics"} />} />
        <Route path="/dc" element={<Filter params={"DC Comics"} />} />
        <Route path="/todos" element={<Filter params={"Todos"} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/heroe/:heroeID" element={<Heroe />} />
        <Route path="/heroe/:heroeID" element={<Heroe />} />
        <Route
          path="/*"
          element={
            <main className="found">
              <p>Nada por aquí!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};
