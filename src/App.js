import style from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { createContext } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useAuthUser } from "./hooks/useAuthUser";

export const AuthContext = createContext();
function App() {
  const { authUser, setAuthUser } = useAuthUser();
  return (
    <div className={style}>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/main"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
