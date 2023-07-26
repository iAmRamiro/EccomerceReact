import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyCard = () => {
  return (
    <Box textAlign="center">
      <h2>Oops! Parece que aún no has añadido nada a tu carrito.</h2>
      <h2>Continua comprando para agregar productos a tu carrito</h2>
      <img
        src="https://res.cloudinary.com/dlncijm0v/image/upload/v1690402800/Carrito-Vacio_thawt9.png"
        alt="cart empty"
        width="400px"
      />
      <Link to="/productos">
        <Button variant="contained" color="success">
          Ver Productos
        </Button>
      </Link>
    </Box>
  );
};

export default EmptyCard;
