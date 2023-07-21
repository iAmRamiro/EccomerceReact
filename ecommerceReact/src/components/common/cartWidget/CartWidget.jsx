import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon color="action" />
        </Badge>
        <h5>$0,000</h5>
      </Link>
    </>
  );
};

export default CartWidget;
