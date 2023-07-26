import { Button } from "@mui/material";
import { Box } from "@mui/system";

const CartPurchase = () => {
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
            <p>$200 </p>
            <p>$200</p>
            <p>$200</p>
          </Box>
        </Box>

        <Button variant="contained" color="success">
          Comprar Ahora
        </Button>
      </Box>
    </Box>
  );
};

export default CartPurchase;
