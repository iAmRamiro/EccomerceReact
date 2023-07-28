import { Button } from "@mui/material";
import { Box } from "@mui/system";

import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartPurchase = () => {
  const { getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice();

  let totlaWithIva = total * 1.21;

  return (
    <Box
      bgcolor="#ededed"
      borderRadius="10px"
      boxShadow="5px 10px 20px -17px rgba(0,0,0,1)"
    >
      <Box display="flex" flexDirection="column">
        <Box textAlign="center" borderBottom="1px solid black">
          <h3>Resumen de la compra</h3>
        </Box>

        <Box display="flex" justifyContent="space-around">
          <Box sx={{ fontSize: "23px" }}>
            <p>Subtotal: </p>
            <p>Iva:</p>
            <p>Total:</p>
          </Box>

          <Box sx={{ fontSize: "23px" }}>
            <p>${total} </p>
            <p>21 %</p>
            <p>${totlaWithIva}</p>
          </Box>
        </Box>

        <Link to="/checkout">
          <Button variant="contained" color="success" fullWidth>
            Iniciar Compra
          </Button>
        </Link>
        <Link to="/productos">
          <Button variant="contained" fullWidth sx={{ marginTop: "20px" }}>
            Ver Más Productos
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CartPurchase;
