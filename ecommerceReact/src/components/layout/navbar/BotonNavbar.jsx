import { Button } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const BotonNavbar = ({ nombre, key, path }) => {
  return (
    <Button
      color="inherit"
      key={key}
      component={NavLink}
      to={path}
      sx={{
        position: "relative",
        "::before": {
          content: "''",
          backgroundColor: "black",
          position: "absolute",
          left: "0",
          bottom: " -0.3rem",
          height: "0.3rem",
          width: "0",
          transition: "0.3s ease-in-out",
        },
        ":hover::before": {
          content: "''",
          backgroundColor: " black",
          position: "absolute",
          left: "0",
          bottom: "-0.3rem",
          height: "0.3rem",
          width: "100%",
        },
      }}
    >
      {nombre}
    </Button>
  );
};

export default BotonNavbar;
