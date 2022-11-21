import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Admin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user,loading} = useContext(AuthContext);
  const [isAdmin,isLoading] = Admin(user?.email)
  if(loading || isLoading){
    return <div className="flex justify-center mt-20">
        <progress className="progress w-56 text-center items-center mx-auto"></progress>
    </div>
  }
  if (user && isAdmin) {
    return children;
    
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
 
};

export default AdminRoute;