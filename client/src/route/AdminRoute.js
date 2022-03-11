import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const admin = localStorage.getItem("admin");
  return admin == "true" ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
