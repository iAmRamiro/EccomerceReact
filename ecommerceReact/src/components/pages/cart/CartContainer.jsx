import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Title from "../../common/title/Title";
import Cart from "./Cart";
import CartPurchase from "./CartPurchase";
import EmptyCard from "./EmptyCard";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  const limpiar = () => {
    const swalWithMuiButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });

    swalWithMuiButtons
      .fire({
        title: "¿Seguro quieres vaciar tu carrito?",
        text: "No podrás revertir los cambios.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Vaciar",
        cancelButtonText: "No vaciar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithMuiButtons.fire(
            "Vaciado!",
            "Se eliminaron productos del Carrito",
            "success"
          );
          clearCart();
        }
      });
  };

  const productos = cart.map((prod) => <Cart prod={prod} key={prod.id} />);

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
            <Grid item xs={12} md={7} mr="20px">
              {productos}
            </Grid>
            <Grid item xs={12} md={3}>
              <CartPurchase />
            </Grid>
          </Grid>

          <Button
            onClick={limpiar}
            variant="contained"
            color="secondary"
            sx={{ marginTop: { xs: "20px", md: "0px" } }}
          >
            Vaciar Carrito
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartContainer;
