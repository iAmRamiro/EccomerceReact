import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const botonContactar = () => {
  return (
    <Button
      color="error"
      component={Link}
      to="/contacto"
      sx={{
        display: { xs: "none", md: "flex" },
        borderRadius: "2rem",
        border: "3px solid rgb(236, 106, 106)",
        position: "relative",
        padding: "9px 9px",
        ":hover": {
          color: "rgb(219, 116, 116)",
        },
      }}
    >
      Contactar
    </Button>
  );
};

export default botonContactar;
