import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./productCard.css";
import { Button } from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <div style={{ padding: "5px" }}>
      <div className="card">
        <img
          className="product--image"
          src={item.img}
          alt="product image"
          width="400px"
        />
        <h2
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textoverflow: "ellipsis",
          }}
        >
          {item.title}
        </h2>
        <p className="price"> ${item.price}</p>

        <Link to={`/item/${item.id}`}>
          <Button
            variant="contained"
            startIcon={<VisibilityIcon />}
            sx={{
              width: "100%",
              padding: "10px",
              transition: "all .2s",
              ":hover": { opacity: "0.7" },
            }}
          >
            Ver Detalles
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
