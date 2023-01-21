import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types";

export const Login = () => {
  const { dispatch, user } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const lastPath = localStorage.getItem("lastPath") || "/todos";

  const handleLogin = () => {
    if (newName === "") {
      setError(true);
    } else {
      setError(false);
      dispatch({
        type: types.login,
        payload: {
          name: newName,
        },
      });
      navigate(lastPath);
    }
  };
  useEffect(() => {}, [newName]);

  return (
    <div className={`container mt-5 ${user.logueado ? "" : "login-container"}`}>
      <label className="label-text" htmlFor="name">
        Ingresá tu nombre
      </label>
      <hr />
      <div className="d-flex flex-column m-auto">
        <input
          type="text"
          name="name"
          className={`form-control name my-2 ${error ? "alert-danger" : ""} `}
          id="name"
          placeholder="Steve Jobs"
          required
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="btn btn-primary btn-login"
        >
          Logín
        </button>
      </div>
    </div>
  );
};
