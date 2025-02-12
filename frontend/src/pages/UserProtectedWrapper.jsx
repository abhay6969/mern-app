import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
