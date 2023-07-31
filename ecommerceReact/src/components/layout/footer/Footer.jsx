import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BotonNavbar from "../navbar/BotonNavbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";

const Footer = () => {
  const footerLinks = [
    {
      title: "Inicio",
      path: "/",
    },
    {
      title: "Productos",
      path: "/productos",
    },
    {
      title: "Nosotros",
      path: "/nosotros",
    },

    {
      title: "Asesoria",
      path: "/asesoria",
    },
  ];

  const mediosDePago = [
    {
      medio: "visa",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/visa_shmpqm.png",
    },

    {
      medio: "masterCard",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/mastercard_vwhclu.png",
    },

    {
      medio: "AmericanExpress",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/americanExpress_f7lor6.png",
    },

    {
      medio: "cabal",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235835/ecommerce/medios%20de%20pago/cabal_2x_z39uah.png",
    },

    {
      medio: "Banelco",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/banelco_2x_u39zes.png",
    },

    {
      medio: "Naranja",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/tarjeta-naranja_2x_v1rxj7.png",
    },

    {
      medio: "MercadoPago",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/mercadopago_2x_ohuwtu.png",
    },
    {
      medio: "RapiPago",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/rapipago_2x_gqitrf.png",
    },

    {
      medio: "PagoFacil",
      link: "https://res.cloudinary.com/dlncijm0v/image/upload/v1688235834/ecommerce/medios%20de%20pago/pagofacil_2x_ejbogg.png",
    },
  ];

  return (
    <Grid container pt={10} pl={2} bgcolor="#f7f7f7" mt={20}>
      <Grid item xs={12} md={3} textAlign={{ xs: "center", sm: "left" }}>
        <Typography variant="h5">Navegacion</Typography>
        <List>
          {footerLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <BotonNavbar
                nombre={item.title}
                key={item.title}
                path={item.path}
              />
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography variant="h5" ml={2}>
          Medios de Pago
        </Typography>
        {mediosDePago.map((medio) => (
          <img
            key={medio.medio}
            src={medio.link}
            alt={medio.medio}
            style={{ width: "40px", padding: "1rem", marginLeft: "1rem" }}
          ></img>
        ))}
        <Typography variant="h5" ml={2}>
          Formas de Envio
        </Typography>
        <img
          src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/ar/oca@2x.png"
          alt="OCA"
          style={{ width: "60px", marginLeft: "1.2rem" }}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography variant="h5" ml={2}>
          Contactanos
        </Typography>
        <ListItem
          disablePadding
          sx={{ cursor: "pointer", marginLeft: "1.3rem" }}
        >
          <ListItemIcon>
            <LocalPhoneIcon />
          </ListItemIcon>
          <ListItemText primary="+54 11231654" />
        </ListItem>
      </Grid>

      <Grid item xs={12} md={3}>
        <Typography variant="h5">Redes Sociales</Typography>
        <List>
          <ListItem disablePadding>
            <InstagramIcon />
            <WhatsAppIcon />
            <FacebookIcon />
          </ListItem>
        </List>
        <Typography variant="h5" pr={10} pt={2}>
          Novedades, Descuentos, Promociones
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField id="e-mail" label="e-mail" variant="standard" />
          <IconButton sx={{ margin: "0", padding: "0" }} color="secondary">
            <SendIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
