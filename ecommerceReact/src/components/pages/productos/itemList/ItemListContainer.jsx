import Title from "../../../common/title/Title";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { pedirDatos } from "../../../helper/pedirDatos";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [titulo, setTitulo] = React.useState("Todos los Productos");

  const { categoryName } = useParams();

  useEffect(() => {
    setTimeout(() => {
      pedirDatos()
        .then((res) => {
          if (categoryName) {
            setProducts(
              res.filter((element) => element.category === categoryName)
            );
            setTitulo(categoryName);
          } else {
            setProducts(res);
            setTitulo("Todos los Productos");
          }
        })
        .catch((error) => console.error(error));
    }, 3000);
  }, [categoryName]);

  const productos = products.map((item) => (
    <ItemList products={item} key={item.id} />
  ));

  const skeletons = Array.from(new Array(4), (skeleton) => (
    <>
      <Stack spacing={1} key={skeleton}>
        <Skeleton variant="rectangular" width={300} height={280} />
        <Skeleton variant="rounded" width={300} height={40} />
      </Stack>
      <Stack spacing={1} key={skeleton}>
        <Skeleton variant="rectangular" width={300} height={280} />
        <Skeleton variant="rounded" width={300} height={40} />
      </Stack>
    </>
  ));

  const categories = [
    {
      category: "Remeras",
      path: "/category/remeras",
    },

    {
      category: "Musculosas",
      path: "/category/musculosas",
    },

    {
      category: "Buzos",
      path: "/category/buzos",
    },

    {
      category: "Shorts",
      path: "/category/shorts",
    },

    {
      category: "Suplementos",
      path: "/category/Suplementos",
    },

    {
      category: "Todos",
      path: "/productos",
    },
  ];

  return (
    <Container maxWidth="1600px">
      <Grid container>
        <Grid item md={2} marginTop={25}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                borderBottom: "1px solid rgba(0,0,0,0.2)",
                paddingBottom: "5px",
                textTransform: "uppercase",
                letterSpacing: "6px",
              }}
            >
              Categorias
            </Typography>
            <List>
              {categories.map((category) => (
                <ListItem disablePadding key={category.category}>
                  <ListItemButton>
                    <Link to={category.path} style={{ textDecoration: "none" }}>
                      <p
                        style={{
                          fontWeight: "300",
                          fontSize: "20px",
                          color: "black",
                          lineHeight: "10px",
                          letterSpacing: "2px",
                        }}
                      >
                        🔴{category.category}
                      </p>
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        <Grid item md={10} textAlign={"center"}>
          <Title titulo={titulo} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              paddingRight: "1rem",
            }}
          >
            {products.length > 0 ? productos : skeletons}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemListContainer;
