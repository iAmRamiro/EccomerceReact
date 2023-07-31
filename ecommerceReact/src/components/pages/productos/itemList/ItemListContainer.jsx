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
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../../../firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [titulo, setTitulo] = React.useState("Todos los Productos");

  const { categoryName } = useParams();

  useEffect(() => {
    const productRef = collection(dataBase, "products");

    const filtrado = categoryName
      ? query(productRef, where("category", "==", categoryName))
      : productRef;

    getDocs(filtrado).then((res) => {
      setProducts(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );

      categoryName ? setTitulo(categoryName) : setTitulo("Todos los productos");
    });
  }, [categoryName]);

  const productos = products.map((item) => (
    <ItemList products={item} key={item.id} />
  ));

  const skeletons = Array.from(new Array(4), (_, index) => (
    <React.Fragment key={index}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={300} height={280} />
        <Skeleton variant="rounded" width={300} height={40} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={300} height={280} />
        <Skeleton variant="rounded" width={300} height={40} />
      </Stack>
    </React.Fragment>
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
    <Box
      maxWidth="1700px"
      margin="0 auto"
      paddingLeft={{ sm: "30px", md: "0px" }}
    >
      <Grid container>
        <Grid
          item
          sx={{ display: { xs: "none", lg: "block" } }}
          md={2}
          marginTop={25}
          padding={0}
        >
          <Box>
            <Typography
              variant="h5"
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
                        <TrendingFlatIcon /> {category.category}
                      </p>
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        <Grid item md={10}>
          <Box sx={{ textAlign: "center" }}>
            <Title titulo={titulo} />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(4,1fr)",
              },
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            {products.length > 0 ? productos : skeletons}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
