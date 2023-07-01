import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemFeatured from "./ItemFeatured";
import ItemsFeatured from "./ItemsFeatured";
import Title from "../../common/title/Title";
/* import "./itemFeatured.css"; */
import React from "react";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";

const ItemFeaturedContainer = () => {
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

  const product = ItemsFeatured.map((item) => <ItemFeatured item={item} />);

  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Title titulo={"Productos Destacados"} />
        <Carousel showDots={true} responsive={responsive} infinite={true}>
          {product}
        </Carousel>
        <Button variant="contained">Ver Todos los Productos</Button>
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
