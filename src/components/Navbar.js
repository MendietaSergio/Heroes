import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types";
export const Navbar = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);
  const { name } = user;

  const handleLogout = () => {
    dispatch({
      type: types.logout,
      payload: null,
    });
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/todos">
            Todos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse view-menu" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/marvel"
                activeclassname="active"
              >
                Marvel
              </NavLink>
              <NavLink className="nav-link" to="/dc">
                DC Comics
              </NavLink>
              <NavLink className="nav-link" to="/search">
                Buscador
              </NavLink>
            </div>
            <div className="container-sesion">
              <div className="text-name">
              <p className="nav-item nav-link text-info mb-0">{name}</p>
              </ div>
              <button
                className="nav-item nav-link border-0 bg-transparent pe-auto"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
