import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Store/ReduxSlice/UserSlice";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser());
    navigate("/admin");
  };

  return (
    <div>
      <p>Admin</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Admin;
