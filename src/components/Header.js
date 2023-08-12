import React from "react";
import { FaMoon } from "react-icons/fa";
import { Typography } from "@mui/material";
const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center p-3 mb-4">
      <h4 className="ml-3">Where do you want to go?</h4>
      <Typography component="span" variant="body1" className="mr-3">
        <FaMoon /> Dark Mode
      </Typography>{" "}
    </div>
  );
};

export default Header;
