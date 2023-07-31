import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Offers from "./Offers";
import { Box, Container, Skeleton, Stack } from "@mui/material";
import Title from "../../../common/title/Title";
import { pedirDatos } from "../../../helper/pedirDatos";
import React, { useEffect, useState } from "react";
import { dataBase } from "../../../../firebaseConfig";
import { collection, where, query, getDocs } from "firebase/firestore";

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
    const productsRef = collection(dataBase, "products");

    const offerProducts = query(productsRef, where("oferta", "==", true));

    getDocs(offerProducts).then((res) =>
      setItems(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      )
    );
  }, []);

  const offerProducts = item.map((item) => (
    <Offers item={item} key={item.id} />
  ));

  const skeletons = Array.from(new Array(4), (_, index) => (
    <React.Fragment key={index}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={250} height={200} />
        <Skeleton variant="rounded" width={250} height={40} />
      </Stack>
    </React.Fragment>
  ));

  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Title titulo={"Ofertas"} />
        <Carousel showDots={true} responsive={responsive} infinite={true}>
          {offerProducts.length > 0 ? offerProducts : skeletons}
        </Carousel>
      </Container>
      <Box
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/dlncijm0v/image/upload/v1688224490/ecommerce/starNutrition_jzxxxa.jpg)",
          backgroundPosition: "center",
          width: { xs: "100%", lg: "1000px" },
          height: { xs: "250px", lg: "400px" },
          backgroundSize: "cover",
          objectFit: "cover",
          margin: "0 auto",
          marginTop: "50px",
          borderRadius: "10px",
        }}
      ></Box>
    </>
  );
};

export default OffersContainer;
