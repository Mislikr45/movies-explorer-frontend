import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    navigate(pathname)
  );
};

export default ProtectedRouteElement;
