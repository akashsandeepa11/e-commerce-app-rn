import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../Store/ReduxSlice/UserSlice";

const AdminProtected = () => {
  //   const admin = true;

  const user = useSelector(userSelector);

  console.log(user);
  if (user.role) {
    if (user.role === "admin") {
      return <Outlet />;
    } else {
      return <Navigate to="/404" />;
    }
  } else {
    return <Navigate to="/404" />;
  }
};

export default AdminProtected;
