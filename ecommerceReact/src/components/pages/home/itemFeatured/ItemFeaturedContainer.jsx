import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemFeatured from "./ItemFeatured";
import Title from "../../../common/title/Title";
import React, { useEffect } from "react";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { pedirDatos } from "../../../helper/pedirDatos";

const ItemFeaturedContainer = () => {
  const [items, setItems] = React.useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    pedirDatos()
      .then((res) => setItems(res))
      .catch((error) => console.error(error));
  }, []);

  const itemsFeatured = items.filter((item) => item.destacado === true);

  const product = itemsFeatured.map((item) => (
    <ItemFeatured item={item} key={item.id} />
  ));

  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Title titulo={"Productos Destacados"} />
        <Carousel responsive={responsive} infinite={true}>
          {product}
        </Carousel>

        <Link to="/productos">
          {" "}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ marginTop: "20px" }}
          >
            Ver Todos los Productos
          </Button>{" "}
        </Link>

        <img
          style={{ width: "1200px", marginTop: "4rem" }}
          src="https://res.cloudinary.com/dlncijm0v/image/upload/v1688050544/ecommerce/madeToWin_rvsjek.webp"
          alt="made to win"
        />
      </Container>
    </>
  );
};

export default ItemFeaturedContainer;
