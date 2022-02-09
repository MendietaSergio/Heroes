import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Dc } from "../pages/Dc.js";
import { Marvel } from "../pages/Marvel.js";
import { Search } from "../pages/Search.js";
import { Heroe } from "../pages/Heroe.js";
import { Navbar } from "../components/Navbar.js";

export const DashboardRouter = () => {
  const {pathname} = useLocation()
  localStorage.setItem('lastPath', pathname)
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<Dc />} />
        <Route path="/search" element={<Search />} />
        <Route path="/heroe/:heroeID" element={<Heroe />} />
        <Route
          path="/*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Nada por aquí!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};
