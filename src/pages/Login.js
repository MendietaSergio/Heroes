import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types";

export const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  //si encuentra su ultima ruta, lo redireccion a la misma. sino lo envia al home
  const lastPath = localStorage.getItem('lastPath') || '/'

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
          name: "Sergio"
        }
    });
    navigate(lastPath)
  };

  return (
    <div className="container mt-5">
      <h1>Logín</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">
        Logín
      </button>
    </div>
  );
};
