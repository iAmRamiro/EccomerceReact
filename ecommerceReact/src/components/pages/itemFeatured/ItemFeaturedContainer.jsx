import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemFeatured from "./ItemFeatured";
import ItemsFeatured from "./ItemsFeatured";
import "./itemFeatured.css";
import React from "react";

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
    <div className="contenedor">
      <h1 className="title">Productos Destacados</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default ItemFeaturedContainer;
