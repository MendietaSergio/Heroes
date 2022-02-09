import { React, useReducer, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import { AuthReducer } from "./auth/AuthReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {
    logueado : false
  }
};

function App() {
  const [user, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    //cuando user cambie, se cambia el estado user en localstorage
    localStorage.setItem("user", JSON.stringify(user, null, 3));
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <div className="container">
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
