import { Drawer, IconButton, AppBar, Toolbar, Box, Badge } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import "./Navbar.css";
import NavListDrawer from "./NavListDrawer";
import BotonNavbar from "./BotonNavbar";
import BotonContactar from "./botonContactar";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchBarNav from "./SearchBarNav";

export const Navbar = ({ navLinks }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          display: { xs: "grid", md: "none" },
          gridTemplateColumns: "repeat(3,1fr)",
          textAlign: "center",
          padding: "10px",
          lineHeight: "12px",
          letterSpacing: "1px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderLeft: "1px solid rgba(0,0,0,0.1)",
          borderRight: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            borderRight: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <HomeIcon />
          <h5>HOME</h5>
        </Box>

        <Box
          sx={{
            borderRight: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <FormatListBulletedIcon />
          <h5>PRODUCTOS</h5>
        </Box>

        <Box>
          <ShoppingCartIcon color="action" />
          <h5>CARRITO 4</h5>
        </Box>
      </Box>

      <p className="envios">Envios a todo el pais 🚚</p>
      <Box sx={{ display: "flex" }}>
        <Box
          item
          sx={{
            height: { sx: "8rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src="https://res.cloudinary.com/dlncijm0v/image/upload/v1687014685/icon_iz6nhm.png"
            alt="logo"
          />
          <h3 style={{ fontSize: "22px" }}>Fitness Everywhere</h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "1rem",
            cursor: "pointer",
          }}
        >
          <InstagramIcon />
          <WhatsAppIcon />
          <FacebookIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "3rem",
          marginBottom: "1.2rem",
          marginRight: "1rem",
          cursor: "pointer",
        }}
      >
        <Box>
          <PersonAddIcon />
          <h5>Crear Cuenta</h5>
        </Box>
        <Box>
          <LoginIcon />
          <h5>Inicia session</h5>
        </Box>
        <Box>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
          <h5>$0,000</h5>
        </Box>
      </Box>

      <AppBar position="static" sx={{ backgroundColor: "#f7f7f7" }}>
        <Toolbar
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            padding: "0",
            margin: "0",
            width: "90%",
          }}
        >
          <IconButton
            size="large"
            color="black"
            aria-label="ViewHeadlineIcon"
            onClick={() => setOpen(true)}
            sx={{ display: { sx: "flex", md: "none" }, fontSize: "2.2rem" }}
            edge="start"
          >
            <ViewHeadlineIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>

          <h1>
            World<span>Fitness</span>
          </h1>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "3rem",
              alignItems: "center",
              width: "50%",
              color: "black",
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            {navLinks.map((item) => (
              <BotonNavbar
                nombre={item.title}
                key={item.title}
                path={item.path}
              />
            ))}
          </Box>
          <Box>
            <BotonContactar></BotonContactar>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sx: "flex", md: "none" }, fontSize: "24px" }}
      >
        <NavListDrawer navlinks={navLinks} setOpen={setOpen} />
      </Drawer>
      <SearchBarNav />
    </>
  );
};
