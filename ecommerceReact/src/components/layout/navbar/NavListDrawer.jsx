import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavListDrawer = ({ navlinks, setOpen }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "lightblue" }}>
      <nav>
        <List>
          {navlinks.map((element) => (
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to={element.path}
                key={element.title}
                onClick={() => setOpen(false)}
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
