import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const NavListDrawer = ({ navlinks }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "lightblue" }}>
      <nav>
        <List>
          {navlinks.map((element) => (
            <ListItem disablePadding>
              <ListItemButton component="a" href={element.path}>
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
