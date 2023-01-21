import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { Login } from "../pages/Login";
import { DashboardRouter } from "./DashboardRouter";
export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  const estaLogueado = user.logueado

  return (
    <BrowserRouter>
      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={!estaLogueado ?  <Login /> : <Navigate to='/todos'/>} />
          <Route path="/*" element={estaLogueado ? <DashboardRouter />:<Navigate to='/login' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
