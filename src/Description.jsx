import React from "react";
import Headerdes from "./Headerdes";
import authService from "./authService";
export default function Description() {
  const handleLogout = (props) => {
    authService.handleLogout(props);
  };
  return <Headerdes />;
}
