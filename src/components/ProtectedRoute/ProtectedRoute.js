import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) 
};

export default ProtectedRouteElement;
