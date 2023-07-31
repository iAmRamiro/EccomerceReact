import { Box, List, ListItem, ListItemButton } from "@mui/material";
import BotonNavbar from "./BotonNavbar";
import { NavLink } from "react-router-dom";

const NavListDrawer = ({ navlinks, setOpen }) => {
  return (
    <Box
      sx={{
        width: "50vw",
        height: "100%",
        bgcolor: "black",
        color: "white",
        fontSize: "1.7rem",
        padding: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav>
        <List>
          {navlinks.map((element) => (
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to={element.path}
                key={element.title}
                onClick={() => setOpen(false)}
                sx={{
                  color: "white",
                  fontSize: "1.9rem",
                  "&.Mui-selected": { backgroundColor: "blue" },
                }}
              >
                {element.title}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
