import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user,loading} = useContext(AuthContext);
  if(loading){
    return <div className="flex justify-center mt-20">
        <progress className="progress w-56 text-center items-center mx-auto"></progress>
    </div>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivetRoute;
