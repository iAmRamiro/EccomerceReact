import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navProductsDrawer } from "../navlinks";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const ProductDrawer = ({ setOpen }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        bgcolor: "black",
        color: "white",
        fontSize: "1.4rem",
      }}
    >
      <List sx={{ marginTop: "35px" }}>
        {navProductsDrawer.map((element) => (
          <ListItem disablePadding key={element.category}>
            <Button
              variant="contained"
              fullWidth
              component={NavLink}
              to={element.path}
              key={element.category}
              onClick={() => setOpen(false)}
              sx={{
                color: "white",
                fontSize: "1.2rem",
                marginBottom: "25px",
                borderRadius: "1rem",
              }}
            >
              <TrendingFlatIcon /> {element.category}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductDrawer;
