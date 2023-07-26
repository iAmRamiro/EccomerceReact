import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getTotalQuantity, getTotalPrice } = useContext(CartContext);

  let totalQuantity = getTotalQuantity();

  let totalPrice = getTotalPrice();

  return (
    <>
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        <Badge badgeContent={totalQuantity} color="secondary" showZero>
          <ShoppingCartIcon color="action" />
        </Badge>
        <h4 style={{ margin: "0px" }}>${totalPrice}</h4>
      </Link>
    </>
  );
};

export default CartWidget;
