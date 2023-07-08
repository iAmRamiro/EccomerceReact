import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Offers from "./Offers";
import { Container } from "@mui/material";
import Title from "../../../common/title/Title";
import { pedirDatos } from "../../../helper/pedirDatos";
import { useEffect, useState } from "react";

const OffersContainer = () => {
  const [item, setItems] = useState([]);

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

  const offers = item.filter((elem) => elem.oferta === true);

  const offerProducts = offers.map((item) => <Offers item={item} />);

  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Title titulo={"Ofertas"} />
        <Carousel showDots={true} responsive={responsive} infinite={true}>
          {offerProducts}
        </Carousel>
        <img
          style={{ marginTop: "4rem" }}
          src="https://res.cloudinary.com/dlncijm0v/image/upload/v1688224490/ecommerce/starNutrition_jzxxxa.jpg"
          alt="made to win"
        />
      </Container>
    </>
  );
};

export default OffersContainer;
