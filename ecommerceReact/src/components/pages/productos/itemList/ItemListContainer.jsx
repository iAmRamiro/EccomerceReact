import Title from "../../../common/title/Title";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { pedirDatos } from "../../../helper/pedirDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.error(error));
  }, []);

  const productos = products.map((item) => (
    <ItemList products={item} key={item.id} />
  ));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title titulo={"Todos los Productos"} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "20% 80%",
        }}
      >
        <Box>
          <Typography variant="h4">Categorias</Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Remeras" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Musculosas" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Buzos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Shorts" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Suplementos" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            paddingRight: "1rem",
          }}
        >
          {productos}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemListContainer;
