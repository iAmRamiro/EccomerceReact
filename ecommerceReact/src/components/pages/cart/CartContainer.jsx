import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Title from "../../common/title/Title";
import Cart from "./Cart";
import CartPurchase from "./CartPurchase";
import EmptyCard from "./EmptyCard";

const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  const productos = cart.map((prod) => <Cart prod={prod} key={prod.key} />);

  return (
    <Container maxWidth="xl">
      <Box textAlign="center">
        <Title titulo={"Carrito de Compras"} />
      </Box>
      {cart.length === 0 ? (
        <EmptyCard />
      ) : (
        <>
          <Grid container>
            <Grid item xs={12} lg={7} mr="30px">
              {productos}
            </Grid>
            <Grid item xs={12} lg={3}>
              <CartPurchase />
            </Grid>
          </Grid>

          <Button onClick={clearCart} variant="contained" color="secondary">
            Vaciar Carrito
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartContainer;
