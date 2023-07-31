import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const ProductDrawer = ({ setOpen }) => {
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
      sx={{
        width: "100%",
        bgcolor: "black",
        color: "white",
        fontSize: "1.4rem",
      }}
    >
      <List>
        {categories.map((element) => (
          <ListItem key={element.category}>
            <ListItemButton
              component={NavLink}
              to={element.path}
              onClick={() => setOpen(false)}
              sx={{
                color: "white",
                fontSize: "1.4rem",
                "&.Mui-selected": { backgroundColor: "blue" },
              }}
            >
              {element.category}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductDrawer;
