import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import React from "react";
import Title from "../../common/title/Title";
import "./asesoria.css";

const Asesoria = () => {
  return (
    <Container maxWidth="xl">
      <Box textAlign={"center"}>
        <Title titulo={"PLANES DE ASESORAMIENTO PERSONALIZADOS"} />
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={12} md={4} mb={6}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignContent="center"
              alignItems="center"
            >
              <img
                className="imgs"
                src="https://res.cloudinary.com/dlncijm0v/image/upload/v1689084746/platino_eqdtvs.png"
                alt="Platino"
              />
              <h2 className="tituloAsesoria">Asesoramiento Platino</h2>
              <ul className="atributos">
                <li>Rutina y planificación individualizada</li>
                <li>Dieta individualizada</li>
                <li>Recetario</li>
                <li>Material exclusivo</li>
                <li>Resolución de dudas en 24hs</li>
                <li>Constante comunicacion vía Mail</li>
                <li>Revisiones semanales y ajustes sin límite</li>
              </ul>
              <Button variant="contained" color="secondary" size="large">
                Adquir ahora
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} mb={6}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignContent="center"
              alignItems="center"
            >
              <img
                className="imgs"
                src="https://res.cloudinary.com/dlncijm0v/image/upload/v1689084744/premiun_ntj5qm.jpg"
                alt="Premiun"
              />
              <h2 className="tituloAsesoria">Asesoramiento Platino</h2>
              <ul className="atributos">
                <li>Rutina y planificación individualizada</li>
                <li>Dieta individualizada</li>
                <li>Recetario</li>
                <li>Material exclusivo</li>
                <li>Resolución de dudas en 24hs</li>
                <li>Constante comunicacion vía Mail</li>
                <li>Revisiones semanales y ajustes sin límite</li>
              </ul>
              <Button variant="contained" color="secondary" size="large">
                Adquir ahora
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignContent="center"
              alignItems="center"
            >
              <img
                className="imgs"
                src="https://res.cloudinary.com/dlncijm0v/image/upload/v1689084743/premiun_trimestral_chjjkt.jpg"
                alt="Premiun Trimestral"
              />
              <h2 className="tituloAsesoria">Asesoramiento Platino</h2>
              <ul className="atributos">
                <li>Rutina y planificación individualizada</li>
                <li>Dieta individualizada</li>
                <li>Recetario</li>
                <li>Material exclusivo</li>
                <li>Resolución de dudas en 24hs</li>
                <li>Constante comunicacion vía Mail</li>
                <li>Revisiones semanales y ajustes sin límite</li>
              </ul>
              <Button variant="contained" color="secondary" size="large">
                Adquir ahora
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Asesoria;
