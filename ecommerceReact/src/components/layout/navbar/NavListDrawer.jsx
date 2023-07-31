import { Box, Button, List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navLinksDrawer } from "../navlinks";

import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const NavListDrawer = ({ setOpen }) => {
  return (
    <Box
      sx={{
        width: "50vw",
        height: "100%",
        bgcolor: "black",

        padding: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav>
        <List>
          {navLinksDrawer.map((element) => (
            <ListItem disablePadding key={element.title}>
              <Button
                variant="contained"
                fullWidth
                component={NavLink}
                to={element.path}
                key={element.title}
                onClick={() => setOpen(false)}
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  marginBottom: "25px",
                  borderRadius: "1rem",
                }}
              >
                <TrendingFlatIcon /> {element.title}
              </Button>
            </ListItem>
          ))}
          <Button
            onClick={() => setOpen(false)}
            component={NavLink}
            to="/contacto"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              borderRadius: "2rem",
              padding: "9px 9px",
            }}
          >
            Contactar
          </Button>
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
