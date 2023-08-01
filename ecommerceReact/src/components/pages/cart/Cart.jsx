import { Box } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const Cart = ({ prod }) => {
  const { deleteById } = useContext(CartContext);

  return (
    <Box
      boxShadow="5px 10px 34px -10px rgba(0,0,0,0.57)"
      mb="50px"
      width="100%"
      overflow="hidden"
      textAlign={{ xs: "center", sm: "start" }}
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        alignContent="center"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box>
          <img
            src={prod.img}
            alt={prod.title}
            width="100px"
            style={{ objectFit: "contain", padding: "10px" }}
          />
        </Box>
        <Box maxWidth="420px">
          <h2>{prod.title}</h2>
          <p>${prod.price}</p>
          <p>{prod.talle && `Talle: ${prod.talle}`}</p>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => deleteById(prod.id)}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </Box>

        <Box>
          <p>{prod.quantity}</p>
        </Box>

        <Box>
          <p>${prod.quantity * prod.price}</p>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        padding="10px"
        borderTop="1px solid black"
      >
        <p>Envio</p>
        <p style={{ color: "green" }}>Gratis</p>
      </Box>
    </Box>
  );
};

export default Cart;
