import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

const Counter = ({ counter, sumar, restar, agregarAlCarrito }) => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Button variant="outlined" onClick={restar}>
            <RemoveIcon />
          </Button>
        </Box>

        <Box>
          <h3
            style={{
              margin: "0",
              padding: "10px",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            {counter}
          </h3>
        </Box>

        <Box>
          <Button variant="outlined" onClick={sumar}>
            <AddIcon />
          </Button>
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          size="large"
          onClick={() => agregarAlCarrito(counter)}
        >
          Agregar Al Carrito
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
