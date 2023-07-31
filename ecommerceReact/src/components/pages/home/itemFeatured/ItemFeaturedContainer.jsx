import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemFeatured from "./ItemFeatured";
import Title from "../../../common/title/Title";
import React, { useEffect } from "react";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { pedirDatos } from "../../../helper/pedirDatos";
import { dataBase } from "../../../../firebaseConfig";
import { collection, where, query, getDocs } from "firebase/firestore";
import { Box, Skeleton, Stack } from "@mui/material";

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
    const prodRef = collection(dataBase, "products");

    const featuredProducts = query(prodRef, where("destacado", "==", true));

    getDocs(featuredProducts).then((res) =>
      setItems(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      )
    );
  }, []);

  const product = items.map((item) => (
    <ItemFeatured item={item} key={item.id} />
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
        <Title titulo={"Productos Destacados"} />
        <Carousel responsive={responsive} infinite={true}>
          {product.length > 0 ? product : skeletons}
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
      </Container>
      <Box
        sx={{
          backgroundImage:
            "url(https://res.cloudinary.com/dlncijm0v/image/upload/v1688050544/ecommerce/madeToWin_rvsjek.webp)",
          backgroundPosition: "center",
          width: { xs: "100%", lg: "1200px" },
          height: { xs: "300px", lg: "600px" },
          backgroundSize: "cover",
          objectFit: "contain",
          margin: "0 auto",
          marginTop: "50px",
          borderRadius: "10px",
        }}
      ></Box>
    </>
  );
};

export default ItemFeaturedContainer;
