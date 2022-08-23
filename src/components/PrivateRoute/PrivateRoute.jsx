import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { authUser } = useContext(AuthContext);

  if (!authUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
