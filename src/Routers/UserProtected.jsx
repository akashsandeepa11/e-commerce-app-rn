import { Navigate, Outlet } from "react-router-dom";

const UserProtected = () => {
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtected;
